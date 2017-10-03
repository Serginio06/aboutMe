/**
 * Created by sergiiivanchenko on 28/09/2017.
 */

import React,{Component} from 'react';

class Parallex extends Component{

    render(){

        return (
            <div>
                    <div className="parallax" style={this.props.bkgImgSrc}></div>
                <a href="./" className="scroll-icon-down"></a>
            </div>
        )
    }
}

export default Parallex;
