import React from 'react';
import ReactDOM from 'react-dom';
import AdaptiveCard from 'react-adaptivecards'
import * as AdaptiveCards from 'adaptivecards'
var $ = require("jquery");

function SigsHeader() {
    var token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6InFRTktDZUlKZ3J6RmdpUTVNYUo4RjB6OHJRZmk1eGo4M1hfbHh1Q1BaazQiLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1NjU5Mjc5NTcsIm5iZiI6MTU2NTkyNzk1NywiZXhwIjoxNTY1OTMxODU3LCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVZRQXEvOE1BQUFBRkFBVjBYUm4rcFRMNlpCSFFmaGZiYk1NTm9KQm1sVkdCaU52YWVFb3g4M3RwSzhQRjFRbHN4U2VETHA4b0RBbmVZbFN4TjhhTTh4SnROV2FTR042MDFMZDdrZEczKzhpdnUwVXJ6NDAwcFk9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJTSUdTLWRldi1hcHAiLCJhcHBpZCI6IjIwMTkzZGNkLTEwYzYtNGYwMC1hZTY3LTIxODY2NWNiMTBhNiIsImFwcGlkYWNyIjoiMSIsImRldmljZWlkIjoiMDdmYTk0MGMtODM1OC00NzU4LTg1NGUtMWFlNGEyN2Y1YmYzIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJXYW5nIiwiZ2l2ZW5fbmFtZSI6IktlIiwiaXBhZGRyIjoiNTAuMzUuNzYuMTYzIiwibmFtZSI6IktlIFdhbmciLCJvaWQiOiJmODkyOTFiNi1kYTM3LTQ3YjItYTk3Ni1mY2ViZjY4ODZmMGQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjEyNzUyMTE4NC0xNjA0MDEyOTIwLTE4ODc5Mjc1MjctMzYxMDQyNyIsInB1aWQiOiIxMDAzMDAwMDgwMDZCREE3IiwicmgiOiJJIiwic2NwIjoiU2lnbmFscy5SZWFkIFNpZ25hbHMuUmVhZFdyaXRlIFNpZ25hbHMtQ29ydGFuYS5SZWFkIFNpZ25hbHMtQ29ydGFuYS5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkIFNpZ25hbHMtSW50ZXJuYWwuUmVhZC5TaGFyZWQgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUuU2hhcmVkIFNpZ25hbHMtV2luZG93cy5SZWFkIFNpZ25hbHMtV2luZG93cy5SZWFkV3JpdGUgVXNlci5SZWFkIiwic2lkIjoiM2UwNTVhZjgtNzA4OS00YTRmLWE1ZTgtMzg4MDBiM2M4MTFjIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRkl2YnVtTmNTM1AyUnZITThsVmVXczRYeUpwYnpmUW03Rnh6M05tQVBTSSIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoia2V3YW5nQG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJrZXdhbmdAbWljcm9zb2Z0LmNvbSIsInV0aSI6Ik1PNHRFaGRGejBtZWgwTVQ3VVVGQUEiLCJ2ZXIiOiIxLjAifQ.aOIWlwOpdYYoiL-ragR3K4bhp54yyqbFZUFYrnpejuBiCl8-kz-k8rwolzDlzdOLy0td9Jw9XoOY_5knv0OCMsI1wFNKFkuHr2HU4YKibaz58JFKO7urA92lpcJW5Lg8aDGpXeMxkP8RMHzu6PbJ2-Rbp0PrGorGVTNvFTT2eJdJO_O9X04ARo6WgjK-srNMPrjZN_4MRLe5L_crRYFTOeuWwSS9M-KIPAEsoh0b_33CCXsE8g9hoUY2dmJNsK-JslE9YqQLsal7dHpiDADJXS9-J9G1Cn0NbWrs-EIAUFUzxljz4dnuHjY_BazglEMbUmzLyXFC9bXhk-fY0NpPOQ';
    return 'Bearer ' + token;
}

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
              'Authorization': SigsHeader(),
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
            'Authorization': SigsHeader(),
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