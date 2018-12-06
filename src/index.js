import React from 'react';
import ReactDOM from 'react-dom';

import ChatBotContainer from './components/chatBot_container'

let chatBotWrap = document.getElementById('chat_bot_wrapper');

if(!!chatBotWrap) {
    ReactDOM.render(
        <ChatBotContainer />,
        chatBotWrap
    );
}

module.hot.accept();
