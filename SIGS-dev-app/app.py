from flask import Flask, url_for, request, redirect, render_template, jsonify, session
from auth_helper import get_signin_url, get_user_token
import json
import requests

app = Flask(__name__)

@app.route('/', methods=['GET'])
def login():
    get_login_url = url_for('api_login_url', _external=True, _scheme='https')
    return jsonify({'GET': '{0}?state=<your_app_url_that_will_receive_token_parameter>'.format(get_login_url)})


@app.route('/hello', methods=['GET'])
def hello():
    redirect_url = url_for('hello', _external=True, _scheme='https')

    error = request.args.get('error', '')
    if error != '':
        return 'Error:\n' + error + " " + request.args.get('error_description', '')

    state = request.args.get('state', '')
    code = request.args.get('code', '')
    token_response = get_user_token(redirect_url, code)
    print (json.dumps(token_response, indent=4))
    
    if 'error' in token_response:
        return 'Error:\n' + token_response['error_description']

    access_token = token_response['access_token']

    print (state)
    if state != '':
        return_url = '{0}?token={1}'.format(state, access_token)
        return redirect(return_url)
    else:
        return jsonify({'bearer': access_token})


@app.route('/api/login', methods=['GET', 'POST'])
def api_login_url():
    state = request.args.get('state', '')
    redirect_url = url_for('hello', _external=True, _scheme='https')
    login_url = get_signin_url(redirect_url, state)
    return login_url


if __name__ == '__main__':
    app.run(debug=True, host='localhost', port=4000)
