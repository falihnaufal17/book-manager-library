import React, { Component } from 'react';
import { Image } from 'react-bootstrap';

//import image from assets
import MI from '../assets/img/mission-impossible.jpg'

class DetailBook extends Component {
    render() {
        const cover = {
            position: 'absolute',
            width: '100%',
            height: '454px',
            left: '0px',
            top: '0px',

            backgroundImage: `url(${MI})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }

        const coverMini = {
            position: 'absolute',
            width: '200px',
            height: '288.81px',
            left: '1100px',
            top: '253px',

            background: `url(${MI})`,
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
            borderRadius: '15px',
            backgroundSize: 'cover'
        }

        const titleBook = {
            position: 'absolute',
            width: '585px',
            height: '114px',
            left: '104px',
            top: '478px',

            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '50px',
            lineHeight: '68px',

            color: '#000000'
        }

        const date = {
            position: 'absolute',
            width: '414px',
            height: '58px',
            left: '109px',
            top: '543px',

            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '20px',
            lineHeight: '27px',

            color: '#000000',
        }

        const description = {
            position: 'absolute',
            width: '824px',
            height: '342px',
            left: '104px',
            top: '632px',

            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '20px',
            lineHeight: '27px',

            color: '#000000',
        }
        return (
            <div style={cover}>
                <div style={coverMini}></div>
                <div>
                    <h1 style={titleBook}>Mission Impossible</h1>
                    <p style={date}>30 Juni 2019</p>
                </div>
                <div>
                    <p style={description}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac diam eget est rutrum ultrices. Donec laoreet enim a massa dapibus, cursus egestas dui pulvinar. Proin sit amet accumsan lectus. Nullam auctor auctor consequat. Donec semper magna erat, sed fringilla lacus pretium eget. Cras porttitor, nibh sit amet interdum bibendum, nibh velit accumsan tellus, vel vehicula tellus leo vitae ipsum. Praesent sit amet libero sed orci ullamcorper efficitur. Pellentesque in euismod purus, sit amet ultrices tortor. Vestibulum ante dui, tempor at dui id, tincidunt euismod diam. Integer pellentesque massa nibh, ac eleifend odio malesuada sed. Phasellus orci sem, cursus nec orci ut, accumsan facilisis lacus. Nullam at elementum nibh, ac gravida felis. In sagittis rhoncus nisi tempus dignissim. Sed fringilla consequat ante vitae lobortis. Cras posuere ligula vel enim suscipit malesuada. Vivamus non nulla ut ante imperdiet euismod quis nec massa.
                    </p>
                </div>
            </div>
        )
    }
}

export default DetailBook;