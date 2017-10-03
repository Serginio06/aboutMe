/**
 * Created by sergiiivanchenko on 27/09/2017.
 */
import React, {Component} from 'react';
import Classes from './Classes';

class Education extends Component {

    render() {

        return (
            <div className="experience component__wrapper">
                <h1>Education</h1>

                <div className="block624">

                    <p>AI graduated from ISG (Institut Supérieur de Gestion) - Paris, France - in 2012 and obtained a Master in Management, speciality Marketing.</p>
                    <div>&nbsp;</div>
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
                        <Classes items={this.props.projectsStore}/>
                    </div>
                </div>

            </div>
        )
    }
}


export default Education;