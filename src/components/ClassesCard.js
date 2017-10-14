/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';



class ClassesCard extends Component {

    render() {
        let basePath,cardContant = '';
        basePath = process.env.NODE_ENV === 'development' ? './':'./build/';




        if (this.props.item) {
            if ( this.props.item.link !== undefined ) {
                cardContant = <div className="card_content_wrapper">
                    <a href={this.props.item.link} target="_blank">
                        <img src={basePath + this.props.item.src} alt={this.props.item.text}/>
                    </a>
                    <p>{this.props.item.text}</p>
                </div>
            } else {
                cardContant = <div className="card_content_wrapper">
                        <img src={basePath + this.props.item.src} alt={this.props.item.text}/>
                    <p>{this.props.item.text}</p>
                </div>
            }

        }

        return (
            <div className="card">
                {cardContant}
            </div>
        )
    }

}

export default ClassesCard;
