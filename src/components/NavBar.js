/**
 * Created by sergiiivanchenko on 25/09/2017.
 */
import React, {Component} from 'react';
// import './NavBar.css';

class NavBar extends Component {

    constructor(props) {
        super (props);
        this.state = {
            isMenuOpened: false,
            menuClass: 'NavBar__items-wrapper',
            dimmer:'dimmer',
            NavBar__name:'NavBar__name'
        }

    }


    barsIconClick = function () {
        if (!this.state.isMenuOpened) {
            console.log ('barsIconClick opened');
            this.setState ({isMenuOpened: true});
            this.setState ({menuClass: 'NavBar__items-wrapper openUp'});
            this.setState ({dimmer: 'dimmer active'});
            this.setState ({NavBar__name: 'NavBar__name deActive'});


        } else {
            console.log ('barsIconClick closed');
            this.setState ({isMenuOpened: false});
            this.setState ({menuClass: 'NavBar__items-wrapper'});
            this.setState ({dimmer: 'dimmer'});
            this.setState ({NavBar__name: 'NavBar__name'});
        }

    };

    render() {

        return (
            <div className="NavBar">
                <div className={this.state.dimmer}></div>
                <div className={this.state.NavBar__name}>
                    <a href="/" id="top" className="uppercase">
                        Serhii Ivanchenko
                    </a>

                </div>

                {/*<div className={this.state.NavBar__itemsWrapper} ref={(div)=>this.itemsWrapperDiv = div}>*/}
                <div className={this.state.menuClass} ref={(div)=>this.itemsWrapperDiv = div}>
                    <i className="fa fa-bars fa-2x NavBar__barsIcon" onClick={this.barsIconClick.bind (this)}></i>
                    <ul className="NavBar__itemsList">
                    {/*<ul className={this.state.menuClass}>*/}
                        <li className="NavBar__item uppercase">Home</li>
                        <li className="NavBar__item uppercase">Portfolio</li>
                        <li className="NavBar__item uppercase">Contact</li>
                    </ul>
                </div>


            </div>
        )

    }

}

export default NavBar;

