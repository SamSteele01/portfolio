import React, { Component } from 'react';
import Headroom from 'react-headroom';

export default class Footer extends Component {
    render() {
        return (
            <div className='footer-wrapper'>
                <Headroom disableInlineStyles={true} wrapperStyle={{height: 0}}>
                    <div className='footer'>
                        <span>This site was made using React. See the code on gitHub.</span>    
                    </div>
                </Headroom>
            </div>
        )
    }
}
