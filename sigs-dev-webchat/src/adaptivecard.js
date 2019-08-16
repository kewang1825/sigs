import * as AdaptiveCards from 'adaptivecards'
import React from 'react'
import PropTypes from 'prop-types'

const ACTION_OPEN_URL = 'Action.OpenUrl'
const ACTION_SHOW_CARD = 'Action.ShowCard'
const ACTION_SUBMIT = 'Action.Submit'

const SIGS_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IlZFbVZoR25TSWxMM3RQalNOb3VvN1RoMGdhUVk4bGQ3NHlvb1hJSmM2TW8iLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1NjU5MzI3MDcsIm5iZiI6MTU2NTkzMjcwNywiZXhwIjoxNTY1OTM2NjA3LCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVZRQXEvOE1BQUFBN0UwQnFoMjdzWjh1WWU5a05KWVBtZjRWZ3lXa2I3QW1NdElUbEdJcG9pVVNrSmpBUFRETitSSFV6WjI2dkJmak9tWmR2RTRLd3V1NTVOeUZ6dG9RbDE4S25LR2pLTXUwVFI3K2s0eVRGVFk9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJTSUdTLWRldi1hcHAiLCJhcHBpZCI6IjIwMTkzZGNkLTEwYzYtNGYwMC1hZTY3LTIxODY2NWNiMTBhNiIsImFwcGlkYWNyIjoiMSIsImRldmljZWlkIjoiMDdmYTk0MGMtODM1OC00NzU4LTg1NGUtMWFlNGEyN2Y1YmYzIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJXYW5nIiwiZ2l2ZW5fbmFtZSI6IktlIiwiaXBhZGRyIjoiNTAuMzUuNzYuMTYzIiwibmFtZSI6IktlIFdhbmciLCJvaWQiOiJmODkyOTFiNi1kYTM3LTQ3YjItYTk3Ni1mY2ViZjY4ODZmMGQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjEyNzUyMTE4NC0xNjA0MDEyOTIwLTE4ODc5Mjc1MjctMzYxMDQyNyIsInB1aWQiOiIxMDAzMDAwMDgwMDZCREE3IiwicmgiOiJJIiwic2NwIjoiU2lnbmFscy5SZWFkIFNpZ25hbHMuUmVhZFdyaXRlIFNpZ25hbHMtQ29ydGFuYS5SZWFkIFNpZ25hbHMtQ29ydGFuYS5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkIFNpZ25hbHMtSW50ZXJuYWwuUmVhZC5TaGFyZWQgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUuU2hhcmVkIFNpZ25hbHMtV2luZG93cy5SZWFkIFNpZ25hbHMtV2luZG93cy5SZWFkV3JpdGUgVXNlci5SZWFkIiwic2lkIjoiM2UwNTVhZjgtNzA4OS00YTRmLWE1ZTgtMzg4MDBiM2M4MTFjIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRkl2YnVtTmNTM1AyUnZITThsVmVXczRYeUpwYnpmUW03Rnh6M05tQVBTSSIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoia2V3YW5nQG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJrZXdhbmdAbWljcm9zb2Z0LmNvbSIsInV0aSI6IlFwdGYtMlIwaVVLMlBpQm1KRkFHQUEiLCJ2ZXIiOiIxLjAifQ.HH_99TtflKB9v_yZ_jDrGDq44bgckIbOcV76ZimyW9TAn5K_YV-nj1EsUKAUWMOTNUX_cMsGzqYgL_7LbSJPOEGC-Q8TIz_Amfgt8mDFxtZEieG67KTj6R5tW4UhDHZbcCyCO8Xq7ZbYxrFH3wAeueQTQ3gQ-p82pdEoxQIz2_kVRxZmAcu2PQRvlqBEmwdQ8pbdDE6ewFaPOEL4sP1z3iGP67RG67l9FmaXFf31kM4JgMJyTNkHgrG_nnLEucVUySL8aH5MONLmo38d13QPYSBYsSpK31Y4nLOwPSjAcTrgJmcDfzGb5WaVlgG60lHhlokFGb-CXykxnlHhAMGQqg';

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
      $.ajax({
        url: 'https://sigs-dev-app.azurewebsites.net/api/postsignal?signal=' + signal,
        headers: {
          'Authorization': SIGS_TOKEN,
        },
        type: 'POST'
      }).done(function(data){
        console.log(signal);
      }).fail(function(error){
        // Handle error
        console.log(JSON.stringify(error, null, 2));
      });
    }
  }

  getHttp(url) {
      $.ajax({
        url: url,
        headers: {
          'Authorization': SIGS_TOKEN,
        },
        type: "GET",
      }).done(function(data){
        console.log(JSON.stringify(data, null, 2));
      }).fail(function(error){
        // Handle error
        console.log(JSON.stringify(error, null, 2));
      });
  }

  openHttp(url) {
    window.open(url, "_blank");
  }
}

AdaptiveCards.AdaptiveCard.actionTypeRegistry.registerType("Action.Http", () => { return new HttpAction(); });
console.log('registerType')