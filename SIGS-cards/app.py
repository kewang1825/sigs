from flask import Flask, url_for, request, redirect, render_template, jsonify, session
from flask_cors import CORS, cross_origin
from auth_helper import get_signin_url, get_user_token
from sigsapi_helper import sigs_get_signals, sigs_post_signal
import json
import requests

app = Flask(__name__)
app.secret_key = "super secret key"

@app.route('/index', methods=['GET'])
def index():
    token = request.args.get('token')
    if not token:
        return 'Error getting token: {0}'.format(token)

    session['token'] = token
    return render_template('index.html', token=token)


@app.route('/', methods=['GET'])
def login():
    index_url = url_for('index', _external=True)

    get_login_url = 'https://sigs-dev-app.azurewebsites.net/api/login?state={0}'.format(index_url)
    print ("GET {0}".format(get_login_url))
 
    r = requests.get(get_login_url)
    print (r.text)

    login_url = r.text
    return redirect(login_url)


@app.route('/api/getsignals', methods=['GET'])
@cross_origin()
def get_signals():
    # get the auth token
    auth_header = request.headers.get('Authorization')
    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        token = session.get('token')

    signals_response = sigs_get_signals(token)
    if 'error' in signals_response:
        return jsonify(error = signals_response['error'])

    signals = signals_response['value']

    print ("VALUE")
    print (json.dumps(signals, indent=4))
    return jsonify(value = signals)


@app.route('/api/postsignal', methods=['POST', 'GET'])
@cross_origin()
def post_signal():
    signal = request.args.get('signal')

    # get the auth token
    auth_header = request.headers.get('Authorization')
    if auth_header:
        token = auth_header.split(" ")[1]
    else:
        token = session.get('token')

    return sigs_post_signal(token, signal)


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=4000)
