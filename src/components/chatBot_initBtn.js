import React, {Component} from 'react'

class ChatBotInitBtn extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        // CSS classes
        const initBtnClasses = [
            "chtBot_crsr--pointr",
            "talkbubble",
            "chtBot_txtClr--white",
            "chtBot_brdr--none",
            "chtBot_fntSz--18px",
            "chtBot_fxd--btm-15px_rgt-15px"
        ];

        return <div>
            <button id="initiate_chat_bot_btn" className={initBtnClasses.join(' ')} onClick={() => this.props.toggleChatWindow()}>
                Need Help?
            </button>
        </div>
    }
}

export default ChatBotInitBtn;