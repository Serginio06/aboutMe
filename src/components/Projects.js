/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import ProjectCards from './ProjectCards';

class Projects extends Component {

    render() {
        // let paragraphs;
        // console.log('Hobbies this.props.items=', this.props.items);

        return (
            <div className="projects blockFullWidth">
                <h2>My latest work</h2>
                <div className="cardsWrapper">
                    {this.props.items.map ((item, index)=> {
                        let elem;
                        elem = <ProjectCards item={item} key={index}/>;
                        return elem
                    })
                    }
                </div>
            </div>
        )
    }
}

export default Projects;
