import React, {Component} from 'react';

import NavBar from './../components/NavBar';
import About from './../components/About';
import Parallex from './../components/Parallex';
import Experience from './../components/Experience';
import Education from './../components/Education';
import Quote from './../components/Quote';
import Contacts from './../components/Contacts';
import Footer from './../components/Footer';


import {connect} from 'react-redux';

import {asyncGetInitAboutParagraphs, asyncGetInitHobbies, asyncGetInitProjects,asyncGetInitQuotes} from './../redux/reduxActions';
import background1 from './../images/background1.jpg';
import background2 from './../images/background2.jpeg';
import background3 from './../images/background3.jpeg';
import background4 from './../images/background4.jpeg';


class App extends Component {

    componentWillMount(){
        this.props.onGetInitAboutParagraphs();
        this.props.onGetInitHobbies();
        this.props.onGetInitProjects();
        this.props.onGetInitQuotes();
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

        let aboutComponent, experienceComponent, educationComponent,quoteComponent='';

        if ( this.props.aboutStore && this.props.hobbiesStore && this.props.projectsStore && this.props.quotesStore ) {
            // console.log('this.props.projectsStore in APP', this.props.projectsStore);
            aboutComponent=<About aboutStore={this.props.aboutStore} hobbiesStore={this.props.hobbiesStore}></About>
            experienceComponent=<Experience projectsStore={this.props.projectsStore}></Experience>
            educationComponent=<Education projectsStore={this.props.projectsStore}></Education>
            quoteComponent=<Quote quotesStore={this.props.quotesStore[0]}></Quote>
        }


        return (
            <div className="App">
                <NavBar></NavBar>
                <Parallex bkgImgSrc={bkgImgSrc[0]}></Parallex>
                {aboutComponent}
                <Parallex bkgImgSrc={bkgImgSrc[1]}></Parallex>
                {experienceComponent}
                {quoteComponent}
                <Parallex bkgImgSrc={bkgImgSrc[2]}></Parallex>
                {educationComponent}
                <Parallex bkgImgSrc={bkgImgSrc[3]}></Parallex>
                <Contacts />
                <Footer />
            </div>
        );
    }
}

// export default App;
export default connect (
    store => ({
        aboutStore:store.aboutReducer,
        hobbiesStore:store.hobbiesReducer,
        projectsStore:store.projectReducer,
        quotesStore:store.quoteReducer
    }),
    dispatch => ({
        onGetInitAboutParagraphs:()=>{
            dispatch(asyncGetInitAboutParagraphs());
        },
        onGetInitHobbies:()=>{
            dispatch(asyncGetInitHobbies());
        },
        onGetInitProjects:()=>{
            dispatch(asyncGetInitProjects());
        },
        onGetInitQuotes:()=>{
            dispatch(asyncGetInitQuotes());
        }
    })
) (App);