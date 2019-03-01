import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import ChatBotContainer from './components/ChatContainer'

let chatBotWrap = document.getElementById('chat_bot_wrapper');

if(!!chatBotWrap) {
    ReactDOM.render(
        <ChatBotContainer />,
        chatBotWrap
    );
}
