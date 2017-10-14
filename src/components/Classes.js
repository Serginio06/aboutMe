/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import ClassesCard from './ClassesCard';
// import ClassesCard from './ClassesCard';

class Classes extends Component {

    render() {
        // let paragraphs;
        // console.log('Hobbies this.props.items=', this.props.items);

        return (
            <div className="hobbies blockFullWidth">
                <h2>My classes</h2>
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

export default Classes;
