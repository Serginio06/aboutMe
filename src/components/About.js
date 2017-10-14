/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import Hobbies from './../components/Hobbies';

class About extends Component {

    render() {

        return (
            <div className="about component__wrapper">
                <h1>About me</h1>

                <div className="blockFullWidth">
                    <div className="block624">

                        {this.props.aboutStore.map ((item, index) => {
                            let elem;

                            elem =
                                <div key={index}>
                                    <p >{item.text}
                                    </p>
                                    &nbsp;</div>;

                            return elem;

                        })
                        }
                    </div>
                </div>

                <div className="blockFullWidth">
                    <div className="block1000">
                        <Hobbies items={this.props.hobbiesStore}/>
                    </div>
                </div>
            </div>
        )
    }

}

export default About;
