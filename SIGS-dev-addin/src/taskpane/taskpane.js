function SigsHeader() {
  var token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6ImtxSGZiYVdYNGpPMHdsM3RpZVJINVcyd0xxUlNWUm9lSENUeTcyc0xEbVkiLCJhbGciOiJSUzI1NiIsIng1dCI6InU0T2ZORlBId0VCb3NIanRyYXVPYlY4NExuWSIsImtpZCI6InU0T2ZORlBId0VCb3NIanRyYXVPYlY4NExuWSJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1NjQ3MjY0NTUsIm5iZiI6MTU2NDcyNjQ1NSwiZXhwIjoxNTY0NzMwMzU1LCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVZRQXEvOE1BQUFBL0xCSlpZMkVDUzNYZmd2Z2VITjVTVG9ZR3I0TDhkeVc5eWJlOFNZeFdYZ1Avb1ltL0JJUlYxYUFnQVFVZmZ1R2hSTFlnN1IzNzI4b0o1T216VDVSZlUyaFRPQWovSHNhYXhZc1VLWkxFcUk9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJTSUdTLWRldi1hcHAiLCJhcHBpZCI6IjIwMTkzZGNkLTEwYzYtNGYwMC1hZTY3LTIxODY2NWNiMTBhNiIsImFwcGlkYWNyIjoiMSIsImRldmljZWlkIjoiMDdmYTk0MGMtODM1OC00NzU4LTg1NGUtMWFlNGEyN2Y1YmYzIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJXYW5nIiwiZ2l2ZW5fbmFtZSI6IktlIiwiaXBhZGRyIjoiNTAuMzUuNzYuMTYzIiwibmFtZSI6IktlIFdhbmciLCJvaWQiOiJmODkyOTFiNi1kYTM3LTQ3YjItYTk3Ni1mY2ViZjY4ODZmMGQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjEyNzUyMTE4NC0xNjA0MDEyOTIwLTE4ODc5Mjc1MjctMzYxMDQyNyIsInB1aWQiOiIxMDAzMDAwMDgwMDZCREE3IiwicmgiOiJJIiwic2NwIjoiU2lnbmFscy5SZWFkIFNpZ25hbHMuUmVhZFdyaXRlIFNpZ25hbHMtQ29ydGFuYS5SZWFkIFNpZ25hbHMtQ29ydGFuYS5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkIFNpZ25hbHMtSW50ZXJuYWwuUmVhZC5TaGFyZWQgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUuU2hhcmVkIFNpZ25hbHMtV2luZG93cy5SZWFkIFNpZ25hbHMtV2luZG93cy5SZWFkV3JpdGUgVXNlci5SZWFkIiwic2lkIjoiM2UwNTVhZjgtNzA4OS00YTRmLWE1ZTgtMzg4MDBiM2M4MTFjIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRkl2YnVtTmNTM1AyUnZITThsVmVXczRYeUpwYnpmUW03Rnh6M05tQVBTSSIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoia2V3YW5nQG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJrZXdhbmdAbWljcm9zb2Z0LmNvbSIsInV0aSI6IndxdDEwQlQzUjBpVXFqOXRRTlFCQUEiLCJ2ZXIiOiIxLjAifQ.cyM0NeT1bhiKkp0rNSr7mg0696mcUJQaX8TwiOPE1kagA5V_DfeLAsZs8plEvxgR4EnGPuiqONd3mTnZC09g0sAuy6iLne-uSteR9hQitlh8ckRIuuRKb7_43HvM1kDeAw9AnHeEYkKQ9DrHGFJy3CCZSblDYT6n6aPlVZpFCHYXcS5iSNG4JUetdGlqV4yq6fFESSJCfCWbmjik46gPc2Ryra9C6evOUiDAYiJyBb7nXRBYyY89LOQQYwdka9pAZhxPIDrD54fVu5sGWiAbxLCJ3IrUsWV_cvqqsrsblgHTD6Zu-CpqdAfgG5VuoVnhuSj6ieRKeIBtsyVrRq8DAw';
  return 'Bearer ' + token;
}

function GetHttp(url) {
  $('#result').text('waiting...');

  $.ajax({
    url: url,
    headers: {
      'Authorization': SigsHeader(),
    },
    type: "GET",
  }).done(function(data){
    $('#result').text(JSON.stringify(data, null, 2));
  }).fail(function(error){
    // Handle error
    $('#result').text('Failed');
    $('#error').text(JSON.stringify(error, null, 2));
  });
}

function OpenHttp(url) {
  window.open(url, "_blank");
}

// Extends a new action type: Action.Http
class HttpAction extends AdaptiveCards.Action {

  get getJsonTypeName() {
      return 'Action.Http';
  }

  execute() {
      if (this.url != null) {
          if (this.method == "GET") {
              GetHttp(this.url);
          } else {
              OpenHttp(this.url);
          }
      }

      // Check if signal is set, then post the signal after the action is performed
      RenderAndPostSignal(this.signal);
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
}

AdaptiveCards.AdaptiveCard.actionTypeRegistry.registerType("Action.Http", () => { return new HttpAction(); });

function RenderAndPostSignal(signal) {
  $('#signal').text(signal);

  if (signal != null) {
    $('#result').text('waiting...');

    $.ajax({
      url: 'https://sigs-dev-app.azurewebsites.net/api/postsignal?signal=' + signal,
      headers: {
        'Authorization': SigsHeader(),
      },
      type: 'post'
    }).done(function(data){
      $('#result').text(data);
    }).fail(function(error){
      // Handle error
      $('#result').text('Failed');
      $('#error').text(JSON.stringify(error, null, 2));
    });
  }
}

function ShowCard(card) {
  // Create an AdaptiveCard instance
  var adaptiveCard = new AdaptiveCards.AdaptiveCard();

  // Set its hostConfig property unless you want to use the default Host Config
  // Host Config defines the style and behavior of a card
  adaptiveCard.hostConfig = new AdaptiveCards.HostConfig({
      fontFamily: "Segoe UI, Helvetica Neue, sans-serif"
      // More host config options
  });

  // Set the adaptive card's event handlers. onExecuteAction is invoked
  // whenever an action is clicked in the card
  adaptiveCard.onExecuteAction = function (action) {
      // Check if signal is set for Action.Submit, then post the signal after the action is performed
      var signal = action.data == null ? null : action.data["signal"];
      RenderAndPostSignal(signal);
  };

  // Parse the card payload
  adaptiveCard.parse(card);

  // Render the card to an HTML element:
  return adaptiveCard.render();
}

function GetAndShowCard(messageToken)
{
  $('#result').text('waiting...');

  // Construct the REST URL to the current item
  var getMessageUrl = Office.context.mailbox.restUrl +
  `/v2.0/me/messages('` + Office.context.mailbox.item.itemId +`')?$expand=extensions($filter=id eq 'Microsoft.OutlookServices.OpenTypeExtension.Com.Microsoft.Graph.MessageCard')&$select=Extensions`;

  $('#signal').text(getMessageUrl);
  $('#token').text(messageToken);

  $.ajax({
    url: getMessageUrl,
    dataType: 'json',
    headers: { 'Authorization': 'Bearer ' + messageToken }
  }).done(function(data){
    $('#result').text(JSON.stringify(data, null, 2));
    var extension = data['Extensions'][0]
    var card = JSON.parse(extension['AdaptiveCardSerialized']);
    //$('#adaptivecards').text(JSON.stringify(card, null, 2));
    document.getElementById('adaptivecards').appendChild(ShowCard(card));
  }).fail(function(error){
    // Handle error
    $('#result').text('Failed');
    $('#error').text(JSON.stringify(error, null, 2));
  });
}

Office.onReady(info => {
  if (info.host === Office.HostType.Outlook) {
    Office.context.mailbox.getCallbackTokenAsync({isRest: true}, function(result){
      if (result.status === "succeeded") {
        var messageToken = result.value;
        GetAndShowCard(messageToken);
      }
      else {
        // Handle the error
        $('#error').text('Error occurred getting the token');
      }
    });
  }
  else {
    // Author a card
    // In practice you'll probably get this from a service
    // see http://adaptivecards.io/samples/ for inspiration
    var card = {
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
    };

    document.getElementById('adaptivecards').appendChild(ShowCard(card));
  }
});
