/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';


class Quote extends Component {

    render() {
        // let basePath = '';
        // basePath = process.env.NODE_ENV === 'development' ? './' : './build/';

        return (

            <div className="quote blockFullWidth">
                <div className="block1000">
                    <p className="quote__text">" {this.props.quotesStore.text} "</p>
                    <p className="quote__author">- {this.props.quotesStore.author}</p>
                </div>
            </div>
        )
    }
}

export default Quote;
