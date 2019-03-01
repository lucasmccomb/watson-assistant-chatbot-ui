import React, {Component} from 'react'

import InitBtn from './InitBtn'
import ChatBotWindow from './ChatWindow'

class ChatBotContainer extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            chatWindowVisible: false
        }
    }

    // Toggles visibility of chat window
    toggleChatWindow() {
        this.setState({chatWindowVisible: !this.state.chatWindowVisible});
    }

    render() {
        let {chatWindowVisible} = this.state;

        return <div>
            {
                chatWindowVisible ? 
                    <ChatBotWindow toggleChatWindow={this.toggleChatWindow.bind(this)} />
                :
                    <InitBtn toggleChatWindow={this.toggleChatWindow.bind(this)} />
            }
        </div>
    }
}

export default ChatBotContainer;
