import React, {Component} from 'react'

class UserMsg extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {msgTxt, timestamp, msgNum} = this.props;

        // CSS classes
        const usrMsgClasses = [
            "chtBot_mxWdth--85per",
            "chtBot_txtAlgn--right",
            "chtBot_flt--right",
            "chtBot_dsply--block",
            "chtBot_mrgnAll--2per",
            "chtBot_mrgnRght--4per",
            "chtBot_mrgLft--25per",
            "chtBot_bgClr--lghtBlue",
            "chtBot_lineHght--1pt5",
            "chtBot_pddBtm--5px",
            "chtBot_pddTp--10px",
            "chtBot_pddRgt--15px",
            "chtBot_pddLft--15px",
            "chtBot_brdrRdTpLft--15px",
            "chtBot_brdrRdTpRght--15px",
            "chtBot_brdrRdBtmLft--15px"
        ];

        return <div id={`msgNum-${msgNum}`} className="chtBot_wdth--100per chtBot_flt--left">
            <div className={usrMsgClasses.join(' ')}>
                {msgTxt}
                <span className="chtBot_fntSz--9px chtBot_txtClr--gray chtBot_pddBtm--5px chtBot_pddTp--10px chtBot_dsply--block">
                    {timestamp}
                </span>
            </div>
        </div>
    }
}

export default UserMsg;
