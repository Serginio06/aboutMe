/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';


class Card extends Component {

    render() {
        let basePath, projectCardContant = '';
        basePath = process.env.NODE_ENV === 'development' ? './' : './build/';


        if ( this.props.item ) {
            projectCardContant = <a href={this.props.item.link} target="_blank">
                <img src={basePath + this.props.item.src} alt={this.props.item.src}/>
            </a>
        }

        return (
            <div className="PrjectCard">
                {projectCardContant}
            </div>
        )
    }

}

export default Card;
