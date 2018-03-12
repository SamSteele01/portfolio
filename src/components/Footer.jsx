import React, { Component } from 'react';
import Headroom from 'react-headroom';


export default class Footer extends Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <Headroom disableInlineStyles={true} wrapperStyle={{height: 0}}>
                    <div className='footer'>
                        <span>This site was made using React. <a href="https://github.com/SamSteele01/portfolio" target="_blank">See the code on gitHub.</a></span>    
                    </div>
                </Headroom>
            </div>
        )
    }
}
