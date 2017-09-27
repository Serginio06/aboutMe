import React, {Component} from 'react';
import background1 from './../images/background1.jpeg';
import NavBar from './NavBar'
// import background2 from 'images/background2.jpeg';
// import background3 from 'images/background3.jpeg';
// import background4 from 'images/background4.jpeg';
// import './App.css';
// import {Parallax, ParallaxProvider} from 'react-scroll-parallax';

class App extends Component {


    render() {

        const divStyle = {
            backgroundImage: 'url(' + background1 + ')',
        };

        return (
            <div className="App">
                <NavBar></NavBar>
                <div className="App__background-wrapper">
                    <div className="App-header" style={divStyle}>
                        {/*<img src={background1} className="App-logo" alt="logo"/>*/}
                        {/*<img src={background2} className="App-logo" alt="logo"/>*/}
                        {/*<img src={background3} className="App-logo" alt="logo"/>*/}
                        {/*<img src={background4} className="App-logo" alt="logo"/>*/}
                    </div>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <a href="https://serginio06.github.io/angular-ivanchenko/#!/">My first project</a><br/>
                    <a href="https://serginio06.github.io/angular-ivanchenko/#!/">My first project</a>
                </p>
            </div>
        );
    }
}

export default App;
