/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import Projects from './Projects';

class Experience extends Component {

    render() {

        let basePath = '';
        basePath = process.env.NODE_ENV === 'development' ? './' : './build/';


        return (
            <div className="experience component__wrapper" id="portfolio">
                <h1>Experience</h1>


                <div className="block624">
                    <div className="experience__title-block">Summary</div>
                    <p>I am a hard-working personality, who likes to come across challenges and overcome them
                        to utmost perfection. I try to be pro efficient in my fields of expertise,
                        also open for good criticism for my personal improvement. Adaptive with new
                        applications and technologies.
                    </p>
                {/*</div>*/}
                <div>&nbsp;</div>


                    {/*<div className="block624">*/}
                    <div className="experience__title-block">Tech skills</div>
                    <ul className="experience__table-container">
                        <li className="experience__table-cell">Angular 1, 2</li>
                        <li className="experience__table-cell">React (Redux/Flux)</li>
                        <li className="experience__table-cell">NodeJS(Express)</li>
                        <li className="experience__table-cell">MonogDB/MySQL</li>
                        <li className="experience__table-cell">RxJS</li>
                        <li className="experience__table-cell">WebSocket</li>
                        <li className="experience__table-cell">Typescript</li>
                        <li className="experience__table-cell">JavaScript</li>
                        <li className="experience__table-cell">HTML, CSS</li>
                        <li className="experience__table-cell">MEAN</li>
                        <li className="experience__table-cell">RESTful API</li>
                        <li className="experience__table-cell">SASS/SCSS</li>
                        <li className="experience__table-cell">Webpack</li>
                        <li className="experience__table-cell">Gulp</li>
                        <li className="experience__table-cell">ES5/ES6</li>
                    </ul>
                    <a href={basePath+"assets/CV.Sergii Ivanchenko.pdf"} className="BlackWhiteButton1">Curriculum Vitae</a>


                    {/*<ul className="experience__bullets">*/}
                        {/*<li>Worked as a Marketing & Strategy Manager at Dolmen for the Shanghai branch</li>*/}
                        {/*<li>Participated to the success of exhibitions as Marketing & Communication Manager for*/}
                            {/*World Events Agency*/}
                        {/*</li>*/}
                        {/*<li>Handled trade marketing & PR tasks for TAG'Heuer (LVMH Watch & Jewelry) in Shanghai</li>*/}
                    {/*</ul>*/}
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
