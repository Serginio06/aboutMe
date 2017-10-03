/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';


class Card extends Component {

    render() {
        let basePath = '';
        basePath = process.env.NODE_ENV === 'development' ? './' : './build/';

        return (
            <div className="PrjectCard">
                <a src="#">
                    <img src={basePath + this.props.item.src} alt=""/>
                </a>
                {/*<p>{this.props.item.text}</p>*/}
            </div>
        )
    }

}

export default Card;
