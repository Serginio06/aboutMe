import React, {Component} from 'react';

import NavBar from './../components/NavBar';
import About from './../components/About';
import Parallex from './../components/Parallex';
import Experience from './../components/Experience';


import {connect} from 'react-redux';

import {asyncGetInitAboutParagraphs, asyncGetInitHobbies} from './../redux/reduxActions';
import background1 from './../images/background1.jpeg';
import background2 from './../images/background2.jpeg';
import background3 from './../images/background3.jpeg';
import background4 from './../images/background4.jpeg';


class App extends Component {

    componentWillMount(){
        this.props.onGetInitAboutParagraphs();
        this.props.onGetInitHobbies();
        // console.log('hobbiesStore=', this.props.hobbiesStore);
    }

    render() {

        const bkgImgSrc = [
            {
                backgroundImage: 'url(' + background1 + ')',
            },{
                backgroundImage: 'url(' + background2 + ')',
            },{
                backgroundImage: 'url(' + background3 + ')',
            },{
                backgroundImage: 'url(' + background4 + ')',
            }
        ];

        let aboutComponent='';

        if ( this.props.aboutStore && this.props.hobbiesStore ) {
            // console.log('this.props.aboutStore in APP', this.props.aboutStore);
            aboutComponent=<About aboutStore={this.props.aboutStore} hobbiesStore={this.props.hobbiesStore}></About>
        }


        return (
            <div className="App">
                <NavBar></NavBar>
                <Parallex bkgImgSrc={bkgImgSrc[0]}></Parallex>
                {aboutComponent}
                <Parallex bkgImgSrc={bkgImgSrc[1]}></Parallex>
                <Experience />
                <Parallex bkgImgSrc={bkgImgSrc[2]}></Parallex>
                {aboutComponent}
                <Parallex bkgImgSrc={bkgImgSrc[3]}></Parallex>
                {aboutComponent}
            </div>
        );
    }
}

// export default App;
export default connect (
    store => ({
        aboutStore:store.aboutReducer,
        hobbiesStore:store.hobbiesReducer
    }),
    dispatch => ({
        onGetInitAboutParagraphs:()=>{
            dispatch(asyncGetInitAboutParagraphs());
        },
        onGetInitHobbies:()=>{
            dispatch(asyncGetInitHobbies());

        }
    })
) (App);