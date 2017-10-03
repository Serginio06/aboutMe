/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';

class Contacts extends Component {

    render() {


        return (
            <div className="contacts component__wrapper">
                <h1>Contact</h1>

                <div className="blockFullWidth">
                    <div className="block1000">
                        <div className="centered">
                            <p className="contacts__paragraph">Interested in working together?</p>
                            <p className="contacts__paragraph">Wanna grab a coffee and talk about my experience?</p>

                            <button className="BlackWhiteButton">send me an email!</button>
                            <div>&nbsp;</div>
                            <p className="contacts__paragraph">You can also find me there: </p>
                            <div className="contacts__buttonsWrapper">
                                <button className="BlackWhiteButton">Linkedin</button>
                                <button className="BlackWhiteButton">Facebook</button>
                                <button className="BlackWhiteButton">Upwork</button>
                            </div>
                        </div>
                        <a href="./" ><span className="scroll-icon-up"></span><span className="scroll-icon-up-text">TOP</span></a>
                    </div>
                </div>

            </div>
        )
    }

}

export default Contacts;
