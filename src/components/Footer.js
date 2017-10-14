/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import upWorkImgPath from './../images/Icons/upwork-white.png';
// import upWorkImgPath from './../images/background1.jpeg';

class Footer extends Component {




    render() {

        const bkgImgSrc = [
            {
                backgroundImage: 'url(' + upWorkImgPath + ')',
            }
        ];

        return (
            <div className="footer component__wrapper">
                <div className="blockFullWidth">
                    <div className="footer__socialButtonWrapper">

                        {/*<a href="./" className="footer__socialBtn-google"><i className="fa fa-envelope-o footer__socialButtonImg " aria-hidden="false"></i></a>*/}
                        <a href="https://www.upwork.com/o/profiles/users/_~0117f2ac16f238c1ef/" target="_blank" rel="noopener noreferrer" className="footer__socialBtn-upwork"><div className="footer__BtnBackgroundImg" style={bkgImgSrc[0]} aria-hidden="false"></div></a>
                        <a href="https://www.facebook.com/sergey.ivanchenko.372" target="_blank" rel="noopener noreferrer" className="footer__socialBtn-facebook"><i className="fa fa-facebook footer__socialButtonImg " aria-hidden="false"></i></a>
                    </div>

                    <p className="footer__paragraph">sergius.iva@gmail.com</p>
                    <p className="footer__paragraph">+38-066-967-7552</p>
                </div>
            </div>
        )
    }

}

export default Footer;
//<a href="./" className="footer__socialBtn"><i className="fa fa-linkedin footer__socialBtnImg " aria-hidden="true"></i></a>
