import React, {Component} from 'react';

class MsgLoader extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        // CSS classes
        const loaderWrapClasses = [
            "chtBot_flt--left",
            "chtBot_flt--left",
            "chtBot_pddAll--2per",
            "chtBot_mrgnAll--2per",
            "chtBot_mrgnRght--25per",
            "chtBot_bgClr--lghtBlue",
            "chtBot_brdrRdTpLft--15px",
            "chtBot_brdrRdTpRght--15px",
            "chtBot_brdrRdBtmRght--15px"
        ];

        return <div id="msg_loader_wrap" className={loaderWrapClasses.join(' ')}>
            <p id="msg_loader_animation" className="chtBot_anim8--type chtBot_flt--left">
                <span>•</span>
                <span>•</span>
                <span>•</span>
            </p>            
        </div>
    }
}

export default MsgLoader;