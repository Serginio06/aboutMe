/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';


class Card extends Component {

    render() {
        // let paragraphs;
        // console.log('Card this.props.item=', this.props.item);

        return (
            <div className="card">
                <img src={this.props.item.src} alt=""/>
                <p>{this.props.item.text}</p>
            </div>
        )
    }

}

export default Card;
