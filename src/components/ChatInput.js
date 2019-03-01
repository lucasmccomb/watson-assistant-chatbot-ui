import React, {Component} from 'react'

class ChatBotUserInput extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            userInput: undefined
        }
        this.textInput = React.createRef();
    }

    componentDidMount() {
        this.textInput.current.focus();
    }

    handleUserInput(e) {
        this.setState({userInput: e.target.value});
    }

    // Determines what key user has pressed; if 'enter', processes user input
    checkEnterKey(e) {
        if (e.which === 13 || e.keyCode === 13) {
            e.preventDefault();
            this.props.handleUserMessage(e.target.value);
            this.setState({userInput: undefined});
            e.target.value = '';
        }
    }

    render() {

        // CSS classes
        const inputWrapClasses = [
            "chtBot_mxWdth--100per",
            "chtBot_bgClr--white",
            "chtBot_brdrTp--1px",
            "chtBot_brdrClr--lghtGray",
            "chtBot_brdrStyl--solid",
            "chtBot_hght--70px",
            "chtBot_pddAll--15px",
            "chtBot_brdrRdBtmRght--10px",
            "chtBot_brdrRdBtmLft--10px"
        ];
        const txtAreaClasses = [
            "chtBot_hght--50px",
            "chtBot_resz--none",
            "chtBot_txtArea_noGlow",
            "chtBot_dsply--block",
            "chtBot_ovrflwY--scroll",
            "chtBot_brdr--none",
            "chtBot_wdth--90per"
        ];
        const topicBtnClasses = [
            "chtBot_brdrRdAll--3px",
            "chtBot_brdrClr--lghtGray",
            "chtBot_brdrAll--1px",
            "chtBot_brdrStyl--solid",
            "chtBot_mrgnAll--3px",
            "chtBot_dsply--in-block",
            "chtBot_flt--left",
            "chtBot_pddAll--5px",
            "chtBot_crsr--pointr"
        ];

        let {userInput} = this.state;
        let {showYesNoBtns} = this.props;

        return <div className={inputWrapClasses.join(' ')}>
                <textarea id="user_input"
                    className={txtAreaClasses.join(' ')}
                    ref={this.textInput}
                    placeholder="Type a message and press the 'Enter' key to send it"
                    onKeyPress={(e) => {this.checkEnterKey(e)}}
                    onChange={(e) => {this.handleUserInput(e)}}
                    defaultValue={userInput}
                    disabled={showYesNoBtns}>
                </textarea>
            </div>
    }
}

export default ChatBotUserInput;
