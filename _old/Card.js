/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';


class Card extends Component {

    render() {
        let basePath = '';
        let cardContant = '';

        // console.log ('Card this.props.item=', this.props.item);
        if (this.props.item) {
            cardContant = <div className="card">
                <a src="#">
                    <img src={basePath + this.props.item.src} alt={this.props.item.text}/>
                </a>
                <p>{this.props.item.text}</p>
            </div>
        }

        basePath = process.env.NODE_ENV === 'development' ? './' : './build/';


        return (
            <div className="card">
                {cardContant}
            </div>
        )
    }

}

export default Card;
