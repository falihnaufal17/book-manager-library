import React, { Component } from 'react';
import * as bootstrap from 'react-bootstrap';

class Books extends Component {

    render() {
        const searchBar = {
            position: 'absolute',
            width: '65%',
            height: '30px',
            left: '200px',
            top: '140px',
            padding: '14px 40px',

            border: 'none',
            background: '#FFFFFF',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
            borderRadius: '50px',
        }

        const container = {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 0
        }

        const btnAdd = {
            position: 'absolute',
            width: '90px',
            height: '40px',
            left: '1120px',
            top: '250px',
            border: 'none',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)',

            background: '#F4CF5D',
            borderRadius: '10px',
            color: '#FFFFFF',
            cursor: 'pointer'

        }

        const flexContainer = {
            display: 'flex',
            flexWrap: 'wrap',
            marginLeft: '90px',
        }

        const card = {
            width: '180px',
            height: '300px',
            marginTop: '340px',
            marginLeft: '100px',

            background: '#FFFFFF',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
            borderRadius: '15px',
        }

        const cardContainer = {
            padding: '2px 16px',
        }

        const cardImage = {
            width: '180px',
            height: '200px',
            borderRadius: '15px'
        }

        return (
            <div style={container}>
                <form>
                    <div>
                        <input type="text" style={searchBar} placeholder="Search Book..." />
                    </div>
                </form>

                <button style={btnAdd}>ADD</button>

                <div style={flexContainer}>
                    <div style={card}>
                        <img src={require('../assets/img/mission-impossible.jpg')} style={cardImage} />
                        <div style={cardContainer}>
                            <h2>Mission Impossible</h2>
                        </div>
                    </div>
                    <div style={card}>
                        <img src={require('../assets/img/assassins-creed-3.jpg')} style={cardImage} />
                        <div style={cardContainer}>
                            <h2>Assassins Creed 3: ....</h2>
                        </div>
                    </div>
                    <div style={card}>
                        <img src={require('../assets/img/assassins-creed-2.jpg')} style={cardImage} />
                        <div style={cardContainer}>
                            <h2>Assassins Creed 2</h2>
                        </div>
                    </div>
                    <div style={card}>
                        <img src={require('../assets/img/matematika-dan-sains.jpg')} style={cardImage} />
                        <div style={cardContainer}>
                            <h2>Matematika dan Sains</h2>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Books;