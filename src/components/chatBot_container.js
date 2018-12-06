import React, {Component} from 'react'

import ChatBotInitBtn from './chatBot_initBtn'
import ChatBotWindow from './chatBot_window'

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
                    <ChatBotInitBtn toggleChatWindow={this.toggleChatWindow.bind(this)} />
            }
        </div>
    }
}

export default ChatBotContainer;
