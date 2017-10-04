/**
 * Created by sergiiivanchenko on 25/09/2017.
 */
import React, {Component} from 'react';
import Scroll from 'react-scroll';

// for react-scroll
let Link = Scroll.Link;
// let Element = Scroll.Element;
let Events = Scroll.Events;
let scroll = Scroll.animateScroll;
let scrollSpy = Scroll.scrollSpy;


class NavBar extends Component {

    constructor(props) {
        super (props);
        this.state = {
            isMenuOpened: false,
            menuClass: 'NavBar__items-wrapper',
            dimmer: 'dimmer',
            NavBar__name: 'NavBar__name'
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


    componentDidMount() {

        Events.scrollEvent.register ('begin', function (to, element) {
            // console.log ("begin", arguments);
        });

        Events.scrollEvent.register ('end', function (to, element) {
            // console.log ("end", arguments);
        });

        scrollSpy.update ();

    };

    componentWillUnmount() {
        Events.scrollEvent.remove ('begin');
        Events.scrollEvent.remove ('end');
    }

    scrollToTop() {
        scroll.scrollToTop ();
    }

    scrollToBottom() {
        scroll.scrollToBottom ();
    }

    scrollTo() {
        scroll.scrollTo (100);
    }

    scrollMore() {
        scroll.scrollMore (100);
    }

    handleSetActive(to) {
        // console.log (to);
    }


    render() {

        return (
            <div className="NavBar">
                <div className={this.state.dimmer}></div>
                <div className={this.state.NavBar__name}>
                    <a onClick={this.scrollToTop.bind(this)} className="uppercase">
                        Serhii Ivanchenko
                    </a>
                </div>

                {/*<div className={this.state.NavBar__itemsWrapper} ref={(div)=>this.itemsWrapperDiv = div}>*/}
                <div className={this.state.menuClass} ref={(div)=>this.itemsWrapperDiv = div}>
                    <i className="fa fa-bars fa-2x NavBar__barsIcon" onClick={this.barsIconClick.bind (this)}></i>
                    <ul className="NavBar__itemsList">
                        {/*<ul className={this.state.menuClass}>*/}
                        <li className="NavBar__item uppercase"><Link activeClass="activeMenuItm" to="top" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Home</Link></li>

                        <li className="NavBar__item uppercase"><Link activeClass="activeMenuItm" to="portfolio" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-60} isDynamic={true}>Portfolio</Link></li>
                        <li className="NavBar__item uppercase"><Link activeClass="activeMenuItm" to="contacts" spy={true} smooth={'easeOutQuart'} duration={1000} offset={-70} isDynamic={true}>Contact</Link></li>
                    </ul>
                </div>


            </div>
        )

    }

}

export default NavBar;

