/**
 * Created by sergiiivanchenko on 28/09/2017.
 */

import React,{Component} from 'react';
// import Scroll from 'react-scroll';

// let scroll = Scroll.animateScroll;

class Parallex extends Component{

    // scrollToBottom() {
    //     scroll.scrollToBottom ();
    // }
    //
    // scrollToTop() {
    //     scroll.scrollToTop ();
    // }

    render(){

        return (
            <div id="top">
                    <div className="parallax" style={this.props.bkgImgSrc}></div>
                {/*<div onClick={this.scrollToBottom.bind(this)} className="scroll-icon-down"></div>*/}
            </div>
        )
    }
}

export default Parallex;
