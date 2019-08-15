import * as AdaptiveCards from 'adaptivecards'
import React from 'react'
import PropTypes from 'prop-types'

const ACTION_OPEN_URL = 'Action.OpenUrl'
const ACTION_SHOW_CARD = 'Action.ShowCard'
const ACTION_SUBMIT = 'Action.Submit'

export default class MyAdaptiveCard extends React.Component {
  static propTypes = {
    /** The hostConfig object that is passed along to the native AdaptiveCards. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/hostconfig) */
    hostConfig: PropTypes.object,
    /** The card schema.  It must comply with the card schema. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/create/cardschema) */
    payload: PropTypes.object.isRequired,
    /** Method that will be invoked anytime a card action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actions) */
    onExecuteAction: PropTypes.func,
    /** Method that will be invoked when a Submit action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionsubmit) */
    onActionSubmit: PropTypes.func,
    /** Method that will be invoked when an Open Url action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionopenurl) */
    onActionOpenUrl: PropTypes.func,
    /** Method that will be invoked when a Show Card action is executed. [More Info](https://docs.microsoft.com/en-us/adaptive-cards/display/implementingrenderer#actionshowcard) */
    onActionShowCard: PropTypes.func,
    /** Method that will be invoked if an error is thrown while trying to render a card. */
    onError: PropTypes.func,
    /** JSX styles that will be applied to the card conatiner */
    style: PropTypes.object
  }
  constructor (props) {
    super(props)
    // Create this in the constructor so we don't create it every render
    this.adaptiveCard = new AdaptiveCards.AdaptiveCard()
  }

  componentWillUnmount () {
    // Remove all references
    delete this.adaptiveCard
  }

  shouldComponentUpdate (nextProps) {
    return false
  }

  executeAction (a) {
    const type = a.getJsonTypeName()
    switch (type) {
      case ACTION_OPEN_URL: {
        if (this.props.onActionOpenUrl) {
          this.props.onActionOpenUrl(a)
        } else {
          this.defaultOpenUrlHandler(a)
        }

        break
      }
      case ACTION_SHOW_CARD: {
        if (this.props.onActionShowCard) {
          this.props.onActionShowCard(a)
        }
        break
      }
      case ACTION_SUBMIT: {
        if (this.props.onActionSubmit) {
          this.props.onActionSubmit(a)
        }
        break
      }
    }
    if (this.props.onExecuteAction) {
      this.props.onExecuteAction(a)
    }
  }

  defaultOpenUrlHandler (action) {
    window.open(action.url, action.title || '_blank')
  }

  render () {
    if (this.props.hostConfig) {
      this.adaptiveCard.hostConfig = new AdaptiveCards.HostConfig(this.props.hostConfig)
    }
    this.adaptiveCard.onExecuteAction = this.executeAction.bind(this)

    console.log('render')

    try {
      this.adaptiveCard.parse(this.props.payload)
      const result = this.adaptiveCard.render()
      return <div style={this.props.style} ref={(n) => { n && n.appendChild(result) }} />
    } catch (err) {
      console.error(err)
      if (this.props.onError) {
        return this.props.onError(err)
      } else {
        return <div style={{ color: 'red' }}>{err.message}</div>
      }
    }
  }
}

var $ = require("jquery");

// Extends a new action type: Action.Http
class HttpAction extends AdaptiveCards.Action {

  get getJsonTypeName() {
      return 'Action.Http';
  }

  execute() {
      if (this.url != null) {
          if (this.method == "GET") {
              this.getHttp(this.url);
          } else {
              this.openHttp(this.url);
          }
      }

      // Check if signal is set, then post the signal after the action is performed
      this.postSignal(this.signal);
  }

  parse(json) {
      super.parse(json);

      this.method = AdaptiveCards.getStringValue(json["method"]);
      this.url = AdaptiveCards.getStringValue(json["url"]);
      this.signal = AdaptiveCards.getStringValue(json["signal"]);
  }

  get toJSON() {
      let result = super.toJSON();

      AdaptiveCards.setProperty(result, "method", this.method);
      AdaptiveCards.setProperty(result, "url", this.url);
      AdaptiveCards.setProperty(result, "signal", this.signal);
      return result;
  }

  postSignal(signal) {
    if (signal != null) {
        $.post('/api/postsignal?signal=' + signal);
    }
  }
  
  getHttp(url) {
    $.getJSON(url, null, function(data) {
        $('#result').text(JSON.stringify(data, null, 2));
    });
  }
  
  openHttp(url) {
    window.open(url, "_blank");
  }
}

AdaptiveCards.AdaptiveCard.actionTypeRegistry.registerType("Action.Http", () => { return new HttpAction(); });
console.log('registerType')