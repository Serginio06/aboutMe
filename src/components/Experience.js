/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import Projects from './Projects';

class Experience extends Component {

    render() {

        return (
            <div className="experience component__wrapper">
                <h1>Experience</h1>

                <div className="block624">

                    <p>After graduation,&nbsp;I was fortunate to start my work experience in Shanghai (China),&nbsp;
                        where I worked during 4 years:</p>
                    <div>&nbsp;</div>
                    <ul className="experience__bullets">
                        <li>Worked as a Marketing & Strategy Manager at Dolmen for the Shanghai branch</li>
                        <li>Participated to the success of exhibitions as Marketing & Communication Manager for
                            World Events Agency
                        </li>
                        <li>Handled trade marketing & PR tasks for TAG'Heuer (LVMH Watch & Jewelry) in Shanghai</li>
                    </ul>

                </div>

                <div className="blockFullWidth">
                    <div className="block1000">
                        <Projects items={this.props.projectsStore}/>
                    </div>
                </div>

            </div>
        )
    }
}


export default Experience;
