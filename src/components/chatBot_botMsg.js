import React, {Component} from 'react';
import Linkify from 'react-linkify';

class BotMsg extends Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        let {msgTxt, timestamp, msgNum, linkList} = this.props;

        // CSS classes
        const msgClasses = [
            "chtBot_mxWdth--85per",
            "chtBot_flt--left",
            "chtBot_mrgnAll--2per",
            "chtBot_mrgnRght--25per",
            "chtBot_bgClr--lghtBlue",
            "chtBot_brdrRdTpLft--15px",
            "chtBot_brdrRdTpRght--15px",
            "chtBot_brdrRdBtmRght--15px",
            "chtBot_lineHght--1pt5",
            "chtBot_pddBtm--5px",
            "chtBot_pddTp--10px",
            "chtBot_pddRgt--15px",
            "chtBot_pddLft--15px"
        ];
        const timestampClasses = [
            "chtBot_fntSz--9px",
            "chtBot_txtClr--gray",
            "chtBot_pddBtm--5px",
            "chtBot_pddTp--10px",
            "chtBot_dsply--block"
        ];

        return <div name={`msgNum-${msgNum}`} className="chtBot_wdth--100per chtBot_flt--left">
            <div className={ msgClasses.join(' ') }>
                <Linkify properties={{target: '_blank'}}>{msgTxt}</Linkify>
                {
                    linkList ? 
                        <ul>{
                                linkList.map((linkObj, i) => { 
                                    return <li key={i}><a href={linkObj.href} target="_blank">{linkObj.title}</a></li>
                                })
                            }
                        </ul>
                    : ''
                }
                <span className={timestampClasses.join(' ')}>
                    {timestamp}
                </span>
            </div>
        </div>
    }
}

export default BotMsg;