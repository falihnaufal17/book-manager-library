import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        const titleBar = {
            position: 'absolute',
            width: '100%',
            height: '70px',
            left: '0px',
            top: '0px',

            background: '#FFFFFF',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
        };

        const title = {
            position: 'absolute',
            left: '86px',

            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '50px',
            lineHeight: '68px',

            color: '#000000',
        }
        return (
            <div style={titleBar} >
                <h6 style={title}>BOOKS</h6>
            </div>
        );
    }
}

export default Navbar;