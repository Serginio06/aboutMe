/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
// import Card from './Card';
import ClassesCard from './ClassesCard';

class Hobbies extends Component {

    render() {
        // let paragraphs;
        // console.log('Hobbies this.props.items=', this.props.items);


        return (
            <div className="hobbies blockFullWidth">
                <h2>When I'm not working, you can find me ...</h2>
                <div className="cardsWrapper">
                    {this.props.items.map ((item, index)=> {
                        let elem;
                        elem = <ClassesCard item={item} key={index}/>;
                        return elem
                    })
                    }
                </div>
            </div>
        )
    }

}

export default Hobbies;
