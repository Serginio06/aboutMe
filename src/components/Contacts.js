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

        let basePath = '';
        basePath = process.env.NODE_ENV === 'development' ? './' : './build/';

        return (
            <div className="contacts component__wrapper" id="contacts">
                <h1>Contact</h1>

                <div className="blockFullWidth">
                    <div className="block1000">

                        <div className="centered">
                            <div className="contacts__firstBlock-wrapper">
                                <p className="contacts__paragraph">Interested in working together?</p>
                                <p className="contacts__paragraph">Wanna grab a coffee and talk about my experience?</p>
                                {/*<p className="contacts__paragraph">Drop me a line:</p>*/}
                                <div className="contacts__icons-wrapper">
                                    <p className="contacts__icons"><i className="contacts__icon-skype fa fa-skype"
                                                                      aria-hidden="true"></i> ivanchenko.sergiy</p>
                                    <p className="contacts__icons"><i className="contacts__icon-phone fa fa-phone"
                                                                      aria-hidden="true"></i> +38-066-967-7552</p>
                                    <p className="contacts__icons"><i className="contacts__icon-email fa fa-envelope"
                                                                      aria-hidden="true"></i> sergius.iva@gmail.com</p>
                                </div>
                                {/*<button className="BlackWhiteButton1">send me an email!</button>*/}
                                {/*<button className="BlackWhiteButton1"><i className="contacts__skypeIcn fa fa-skype fa-2x" aria-hidden="true"></i>send me an email!</button>*/}
                                {/*<a href={basePath+"assets/CV.Sergii Ivanchenko.pdf"} className="BlackWhiteButton1">Curriculum Vitae</a>*/}
                            </div>
                            <div className="contact__video-wrapper">
                                {/*<video id="video" class="video-js vjs-default-skin" muted="muted" autoplay="autoplay" loop="loop" preload="auto" poster="images/mock-up.jpg">*/}
                                <video id="video" className="contact__video" muted="muted" autoPlay loop="loop"
                                       preload="auto">
                                    <source src={basePath + "video/contacts_video.mp4"} type="video/mp4"/>
                                </video>
                            </div>

                            <div>&nbsp;</div>
                            <p className="contacts__paragraph3">You can also find me there: </p>

                            <div className="contacts__buttonsWrapper">
                                {/*<a className="BlackWhiteButton2">Linkedin</a>*/}
                                <a href="https://www.facebook.com/sergey.ivanchenko.372" target="_blank"
                                   rel="noopener noreferrer" className="BlackWhiteButton2">Facebook</a>
                                <a href="https://www.upwork.com/o/profiles/users/_~0117f2ac16f238c1ef/" target="_blank"
                                   rel="noopener noreferrer" className="BlackWhiteButton2">Upwork</a>
                            </div>
                        </div>

                        <div onClick={this.scrollToTop.bind (this)} className="contacts__arrowUp-div"><span
                            className="scroll-icon-up"></span><span className="scroll-icon-up-text">TOP</span></div>
                    </div>
                </div>

            </div>
        )
    }

}

export default Contacts;
