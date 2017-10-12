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
                <a href={this.props.item.link} target="_blank">
                    <img src={basePath + this.props.item.src} alt={this.props.item.src}/>
                </a>
                {/*<p>{this.props.item.text}</p>*/}
            </div>
        )
    }

}

export default Card;
