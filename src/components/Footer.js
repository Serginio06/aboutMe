/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';

class Footer extends Component {

    render() {


        return (
            <div className="footer component__wrapper">
                <div className="blockFullWidth">
                    <div className="footer__socialBtnWrapper">
                        <a href="./" className="footer__socialBtn"><i className="fa fa-envelope-o footer__socialBtnImg " aria-hidden="true"></i></a>
                        <a href="./" className="footer__socialBtn"><i className="fa fa-linkedin footer__socialBtnImg " aria-hidden="true"></i></a>
                        <a href="./" className="footer__socialBtn"><i className="fa fa-facebook footer__socialBtnImg " aria-hidden="true"></i></a>
                    </div>

                    <p className="footer__paragraph">sergius.iva@gmail.com</p>
                    <p className="footer__paragraph">+38-066-967-7552</p>
                </div>
            </div>
        )
    }

}

export default Footer;
