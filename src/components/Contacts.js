/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import Scroll from 'react-scroll';

let scroll = Scroll.animateScroll;

class Contacts extends Component {


    scrollToTop() {
        scroll.scrollToTop ();
    }

    render() {


        return (
            <div className="contacts component__wrapper" id="contacts">
                <h1>Contact</h1>

                <div className="blockFullWidth">
                    <div className="block1000">
                        <div className="centered">
                            <p className="contacts__paragraph">Interested in working together?</p>
                            <p className="contacts__paragraph">Wanna grab a coffee and talk about my experience?</p>

                            <button className="BlackWhiteButton1">send me an email!</button>
                            <button className="BlackWhiteButton1">Open my CV</button>
                            <div>&nbsp;</div>
                            <p className="contacts__paragraph">You can also find me there: </p>
                            <div className="contacts__buttonsWrapper">
                                <button className="BlackWhiteButton2">Linkedin</button>
                                <button className="BlackWhiteButton2">Facebook</button>
                                <button className="BlackWhiteButton2">Upwork</button>
                            </div>
                        </div>
                        <div onClick={this.scrollToTop.bind(this)} className="contacts__arrowUp-div"><span className="scroll-icon-up"></span><span className="scroll-icon-up-text">TOP</span></div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Contacts;
