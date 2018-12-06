import React, {Component} from 'react'

const {DEV_HOST_URL, LOCAL_HOST_URL} = require('../../static_store');

class ChatBotHeader extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

        // CSS classes
        const headerClasses = [
            "chtBot_top--0",
            "chtBot_wdth--100per",
            "chtBot_bgClr--white",
            "chtBot_hght--110px",
            "chtBot_brdrBtm--1px",
            "chtBot_brdrClr--lghtGray",
            "chtBot_brdrStyl--solid",
            "chtBot_brdrRdTpLft--10px",
            "chtBot_brdrRdTpRght--10px"
        ];
        const closeBtnClasses = [
            "chtBot_top--10px",
            "chtBot_right--10px",
            "chtBot_txtClr--black",
            "chtBot_closeBtn",
            "chtBot_bgClr--white",
            "chtBot_brdr--none",
            "chtBot_crsr--pointr",
            "chtBot_pddAll--0"
        ];
        const iconClasses = [
            "chtBot_wdth--90px",
            "chtBot_txtAlgn--center",
            "chtBot_hght--100per",
            "chtBot_dsply--in-block",
            "chtBot_flt--left"
        ];
        const hdrTxtWrapClasses = [
            "chtBot_wdth--310px",
            "chtBot_txtAlgn--left",
            "chtBot_hght--100per",
            "chtBot_dsply--in-block",
            "chtBot_flt--left"
        ];

        const HeaderIcon = `${DEV_HOST_URL}/headerIcon.png`;
        
        return <div id="dialog_header" className={headerClasses.join(' ')}>
            <div id="hdr_close_btn" className={ closeBtnClasses.join(' ')} onClick={() => this.props.toggleChatWindow()}></div>
            <div id="header_icon_wrap" className={iconClasses.join(' ')}>
                <img id="header_icon" src={HeaderIcon} className="chtBot_wdth--50px chtBot_mrgnTp--30px"/>
            </div>
            <div id="header_txt_wrap" className={hdrTxtWrapClasses.join(' ')}>
                <p id="header_txt_title" className="chtBot_txtClr--blue chtBot_pddTp--20px">Watson Assistant Node.js/React.js Chatbot</p>
            </div>
        </div>
    }
}

export default ChatBotHeader;
