import React, {Component} from 'react';
import axios from 'axios';
import * as Scroll from 'react-scroll'

import ChatHeader from './ChatHeader';
import ChatDialog from './ChatDialog';
import ChatInput from './ChatInput';
const {DEV_HOST_URL, LOCAL_HOST_URL} = require('../../static_store');

const scroller = Scroll.scroller;

class ChatBotWindow extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            chatMsgs: [],
            session_id: null,
            showLoader: true
        }
    }

    componentDidMount() {
        let {session_id} = this.state;
        let that = this;

        // Initiate the conversation once chat window loads
        if(!session_id) {
            axios.get( DEV_HOST_URL + '/api/new-session', {})
            .then((response) => {
                this.setState({session_id: response.data.session_id});
                this.postMsgWrapper(
                    'Hi',
                    response.data.session_id,
                    that
                );
            });  
        }
    }

    // Wrapper function for POST request to send user input
    postMsgWrapper( userMsg, session_id, thisContext ) {
        let {chatMsgs} = this.state;

        return axios.post( DEV_HOST_URL + '/api/message', {
            input: {text: userMsg}, session_id: session_id
        }).then(function (response) {
            const newBotMsg = {
                msgTxt: response.data.output.generic[0].text,
                msgTimestamp: new Date().toLocaleTimeString(),
                isBot: true,
                msgNum: chatMsgs.length + 1
            }
            chatMsgs.push(newBotMsg);
            thisContext.setState({chatMsgs, showLoader: false}, () => {
                thisContext.scrollToMsg(`msgNum-${newBotMsg.msgNum}`);
            });
        }).catch(function (error) {
            console.log(error);
        });
    }

    // Handles adding user message to dialog and calls postMsgWrapper or initiates feedback sequence
    handleUserMessage( userMsg ) {
        let {chatMsgs, session_id, inFeedbackSequence} = this.state;
        let that = this;
        let newUserMsg = {
            msgTxt: userMsg,
            msgTimestamp: new Date().toLocaleTimeString(),
            isBot: false,
            msgNum: chatMsgs.length + 1
        }
        chatMsgs.push(newUserMsg);
        this.setState({chatMsgs}, () => {
            this.scrollToMsg(`msgNum-${newUserMsg.msgNum}`);
            this.setState({showLoader: true});
        });
        this.postMsgWrapper(
            userMsg,
            session_id,
            that
        );
    }

    // Auto-scrolls dialog to top of messages
    scrollToMsg(elemName) {
        scroller.scrollTo(elemName, {
            duration: 400,
            delay: 0,
            smooth: true,
            containerId: 'dialog',
            offset: -325
        });
    }

    render() {
        let {chatMsgs, showLoader} = this.state;
        
        // CSS classes
        const dialogWrapClasses = [
            "chtBot_bottom-10--right-10",
            "chtBot_fntFm--sanSer",
            "chtBot_fntSz--12px",
            "chtBot_brdrRdAll--10px",
            "chtBot_wdth--340px",
            "chtBot_hght--478px",
            "chtBot_bgClr--white",
            "chtBot_boxShdw--blue"
        ];

        return <div id="dialog_wrap" className={dialogWrapClasses.join(' ')}>
            <ChatHeader toggleChatWindow={() => this.props.toggleChatWindow()} />
            <ChatDialog chatMsgs={chatMsgs} showLoader={showLoader}/>
            <ChatInput handleUserMessage={this.handleUserMessage.bind(this)} />
        </div>
    }
}

export default ChatBotWindow;
