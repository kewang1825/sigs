import React from 'react';
import ReactDOM from 'react-dom';
import ReactWebChat from 'botframework-webchat';
import MyAdaptiveCard from './adaptivecard'

const styleOptions = {
    backgroundColor: 'Black',
    bubbleBackground: '#222',
    bubbleBorder: 'solid 1px #444',
    bubbleBorderRadius: 20,
    bubbleFromUserBackground: '#222',
    bubbleFromUserBorder: 'solid 1px #444',
    bubbleFromUserBorderRadius: 20,
    bubbleFromUserTextColor: 'White',
    bubbleTextColor: 'White'
  };

  // Create a new React component that accept render a GitHub repository attachment
const GitHubRepositoryAttachment = props => (
    <div
       style={{
          fontFamily: "'Calibri', 'Helvetica Neue', Arial, sans-serif",
          margin: 20,
          textAlign: 'center'
       }}
    >
       <svg height="64" viewBox="0 0 16 16" version="1.1" width="64" aria-hidden="true">
          <path
             fillRule="evenodd"
             d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"
          />
       </svg>
       <p>
          <a href={`https://github.com/${encodeURI(props.owner)}/${encodeURI(props.repo)}`} target="_blank">
             {props.owner}/<br />
             {props.repo}
          </a>
       </p>
    </div>
);

// Creating a new middleware pipeline that will render <GitHubRepositoryAttachment> for specific type of attachment
const attachmentMiddleware = () => next => card => {
    switch (card.attachment.contentType) {
        case 'application/vnd.microsoft.botframework.samples.github-repository':
            return (
                <GitHubRepositoryAttachment owner={card.attachment.content.owner} repo={card.attachment.content.repo} />
            );

        case 'application/vnd.microsoft.card.adaptive.my':
            //console.log(JSON.stringify(card.attachment.content, null, 2));
            return (
                <MyAdaptiveCard payload={card.attachment.content} />
            );

        default:
            return next(card);
    }
};

ReactDOM.render(
    <ReactWebChat
        // Prepending the new middleware pipeline
        attachmentMiddleware={attachmentMiddleware}
        directLine={window.WebChat.createDirectLine({ secret: 'rzUZkQaQWHs.h7I89HogyL-C4ITJ6t3Yt4eSagwah4KSD6XGpPFmVR0' })}
        styleOptions = { styleOptions }
        />,
    document.getElementById('webchat')
);

document.querySelector('#webchat > *').focus();
