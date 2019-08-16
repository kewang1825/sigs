const SIGS_TOKEN = 'Bearer eyJ0eXAiOiJKV1QiLCJub25jZSI6IlZFbVZoR25TSWxMM3RQalNOb3VvN1RoMGdhUVk4bGQ3NHlvb1hJSmM2TW8iLCJhbGciOiJSUzI1NiIsIng1dCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCIsImtpZCI6ImllX3FXQ1hoWHh0MXpJRXN1NGM3YWNRVkduNCJ9.eyJhdWQiOiJodHRwczovL291dGxvb2sub2ZmaWNlLmNvbSIsImlzcyI6Imh0dHBzOi8vc3RzLndpbmRvd3MubmV0LzcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0Ny8iLCJpYXQiOjE1NjU5MzI3MDcsIm5iZiI6MTU2NTkzMjcwNywiZXhwIjoxNTY1OTM2NjA3LCJhY2N0IjowLCJhY3IiOiIxIiwiYWlvIjoiQVZRQXEvOE1BQUFBN0UwQnFoMjdzWjh1WWU5a05KWVBtZjRWZ3lXa2I3QW1NdElUbEdJcG9pVVNrSmpBUFRETitSSFV6WjI2dkJmak9tWmR2RTRLd3V1NTVOeUZ6dG9RbDE4S25LR2pLTXUwVFI3K2s0eVRGVFk9IiwiYW1yIjpbInB3ZCIsIm1mYSJdLCJhcHBfZGlzcGxheW5hbWUiOiJTSUdTLWRldi1hcHAiLCJhcHBpZCI6IjIwMTkzZGNkLTEwYzYtNGYwMC1hZTY3LTIxODY2NWNiMTBhNiIsImFwcGlkYWNyIjoiMSIsImRldmljZWlkIjoiMDdmYTk0MGMtODM1OC00NzU4LTg1NGUtMWFlNGEyN2Y1YmYzIiwiZW5mcG9saWRzIjpbXSwiZmFtaWx5X25hbWUiOiJXYW5nIiwiZ2l2ZW5fbmFtZSI6IktlIiwiaXBhZGRyIjoiNTAuMzUuNzYuMTYzIiwibmFtZSI6IktlIFdhbmciLCJvaWQiOiJmODkyOTFiNi1kYTM3LTQ3YjItYTk3Ni1mY2ViZjY4ODZmMGQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjEyNzUyMTE4NC0xNjA0MDEyOTIwLTE4ODc5Mjc1MjctMzYxMDQyNyIsInB1aWQiOiIxMDAzMDAwMDgwMDZCREE3IiwicmgiOiJJIiwic2NwIjoiU2lnbmFscy5SZWFkIFNpZ25hbHMuUmVhZFdyaXRlIFNpZ25hbHMtQ29ydGFuYS5SZWFkIFNpZ25hbHMtQ29ydGFuYS5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkIFNpZ25hbHMtSW50ZXJuYWwuUmVhZC5TaGFyZWQgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUgU2lnbmFscy1JbnRlcm5hbC5SZWFkV3JpdGUuU2hhcmVkIFNpZ25hbHMtV2luZG93cy5SZWFkIFNpZ25hbHMtV2luZG93cy5SZWFkV3JpdGUgVXNlci5SZWFkIiwic2lkIjoiM2UwNTVhZjgtNzA4OS00YTRmLWE1ZTgtMzg4MDBiM2M4MTFjIiwic2lnbmluX3N0YXRlIjpbImR2Y19tbmdkIiwiZHZjX2NtcCIsImttc2kiXSwic3ViIjoiRkl2YnVtTmNTM1AyUnZITThsVmVXczRYeUpwYnpmUW03Rnh6M05tQVBTSSIsInRpZCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsInVuaXF1ZV9uYW1lIjoia2V3YW5nQG1pY3Jvc29mdC5jb20iLCJ1cG4iOiJrZXdhbmdAbWljcm9zb2Z0LmNvbSIsInV0aSI6IlFwdGYtMlIwaVVLMlBpQm1KRkFHQUEiLCJ2ZXIiOiIxLjAifQ.HH_99TtflKB9v_yZ_jDrGDq44bgckIbOcV76ZimyW9TAn5K_YV-nj1EsUKAUWMOTNUX_cMsGzqYgL_7LbSJPOEGC-Q8TIz_Amfgt8mDFxtZEieG67KTj6R5tW4UhDHZbcCyCO8Xq7ZbYxrFH3wAeueQTQ3gQ-p82pdEoxQIz2_kVRxZmAcu2PQRvlqBEmwdQ8pbdDE6ewFaPOEL4sP1z3iGP67RG67l9FmaXFf31kM4JgMJyTNkHgrG_nnLEucVUySL8aH5MONLmo38d13QPYSBYsSpK31Y4nLOwPSjAcTrgJmcDfzGb5WaVlgG60lHhlokFGb-CXykxnlHhAMGQqg';

function PostSignal(signal) {
  $('#signal').text(signal);

  if (signal != null) {
    $('#result').text('waiting...');

    $.ajax({
      url: 'https://sigs-dev-app.azurewebsites.net/api/postsignal?signal=' + signal,
      headers: {
        'Authorization': SIGS_TOKEN,
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

function GetHttp(url) {
  $('#result').text('waiting...');

  $.ajax({
    url: url,
    headers: {
      'Authorization': SIGS_TOKEN,
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
      PostSignal(this.signal);
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
  adaptiveCard.onExecuteAction = function (action) {};

  // Parse the card payload
  adaptiveCard.parse(card);

  // Render the card to an HTML element:
  return adaptiveCard.render();
}

function GetAndShowCard(messageToken) {
  $('#result').text('waiting...');

  // Construct the REST URL to the current item
  var getMessageUrl = Office.context.mailbox.restUrl +
  `/v2.0/me/messages('` + Office.context.mailbox.item.itemId +`')?$expand=extensions($filter=id eq 'Microsoft.OutlookServices.OpenTypeExtension.Com.Microsoft.Graph.MessageCard')&$select=Extensions`;

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
    var myCard = {
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

    document.getElementById('adaptivecards').appendChild(ShowCard(myCard));
  }
});
