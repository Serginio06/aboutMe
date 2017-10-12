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
                            <a href="./../assets/CV. Sergii Ivanchenko.pdf" className="BlackWhiteButton1">Open my CV</a>
                            <div>&nbsp;</div>
                            <p className="contacts__paragraph">You can also find me there: </p>
                            <div className="contacts__buttonsWrapper">
                                <a className="BlackWhiteButton2">Linkedin</a>
                                <a href="https://www.facebook.com/sergey.ivanchenko.372" target="_blank" rel="noopener noreferrer" className="BlackWhiteButton2">Facebook</a>
                                <a href="https://www.upwork.com/o/profiles/users/_~0117f2ac16f238c1ef/" target="_blank" rel="noopener noreferrer" className="BlackWhiteButton2">Upwork</a>
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
