import React from 'react';
import ReactDOM from 'react-dom';
import AdaptiveCard from 'react-adaptivecards'
import * as AdaptiveCards from 'adaptivecards'
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
  
const myCard = (
    <AdaptiveCard payload={{
        "type": "AdaptiveCard",
        "version": "1.0",
        "body": [
            {
                "type": "Image",
                "url": "http://adaptivecards.io/content/adaptive-card-50.png"
            },
            {
                "type": "TextBlock",
                "text": "Hello **Adaptive Cards!**"
            }
        ],
        "actions": [
            {
                "type": "Action.Http",
                "title": "Get Signals",
                "method": "GET",
                "url": "https://sigs-dev-app.azurewebsites.net/api/getsignals"
            },
            {
                "type": "Action.Http",
                "title": "Learn more",
                "url": "https://aka.ms/sigs",
                "signal": "BrowserUsage"
            },
            {
                "type": "Action.Http",
                "title": "Open the App",
                "signal": "AppUsage"
            },
            {
                "type": "Action.ShowCard",
                "title": "Comment",
                "card": {
                    "type": "AdaptiveCard",
                    "body": [
                        {
                            "type": "Input.Text",
                            "id": "comment",
                            "isMultiline": true,
                            "placeholder": "Enter your comment"
                        },
                        {
                            "type": "ActionSet",
                            "spacing": "small",
                            "actions": [
                                {
                                    "type": "Action.Http",
                                    "signal": "CommentAdded",
                                    "title": "OK",
                                    "url": "https://messagecardplaygroundfn.azurewebsites.net/api/HttpPost?code=zJaYHdG4dZdPK0GTymwYzpaCtcPAPec8fTvc2flJRvahwigYWg3p0A==&message=The comment was added successfully"
                                }
                            ]
                        }
                    ]
                }
            }
        ]
    }} />
);

ReactDOM.render(myCard, document.getElementById('card'));