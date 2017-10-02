/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';



class Card extends Component {

    render() {
        // let paragraphs;
        let basePath = '';

        basePath = process.env.NODE_ENV === 'development' ? './':'./build/';
        console.log('Card basePath', basePath);


        return (
            <div className="card">
                <img src={basePath+this.props.item.src} alt=""/>
                <p>{this.props.item.text}</p>
            </div>
        )
    }

}

export default Card;
