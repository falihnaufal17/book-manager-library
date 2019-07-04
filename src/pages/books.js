import React, { Component } from 'react';
import Navbar from '../components/navbar';
import ModalForm from '../components/modal';
import { Link } from 'react-router-dom';

import dataBook from '../data/books';
class Books extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalShow: false,
            books: dataBook
        };
    }
    render() {
        let data = this.state.books;
        let modalClose = () => this.setState({ modalShow: false });
        const searchBar = {
            position: 'absolute',
            width: '70%',
            height: '60px',
            left: '200px',
            top: '140px',
            padding: '14px 40px',
            fontSize: '18px',

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
            marginTop: '340px'
        }

        const card = {
            width: '180px',
            height: '280px',
            marginTop: '20px',
            marginLeft: '100px',

            background: '#FFFFFF',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.25)',
            borderRadius: '15px',
        }

        const cardContainer = {
            padding: '2px 16px',
            color: 'black',
        }

        const cardImage = {
            width: '180px',
            height: '200px',
            borderRadius: '15px'
        }

        return (

            <div style={container}>
                <Navbar></Navbar>
                <form>
                    <div>
                        <input type="text" style={searchBar} placeholder="Search Book..." />
                    </div>
                </form>

                <button style={btnAdd} onClick={() => this.setState({ modalShow: true })}>ADD</button>

                <ModalForm
                    show={this.state.modalShow}
                    onHide={modalClose} />


                <div style={flexContainer}>
                    {data.map((item) => {
                        return (
                            <Link to={`/bookdetail/${item.bookid}`}>
                                <div style={card}>
                                    <img src={item.img} style={cardImage} alt="" />
                                    <div style={cardContainer}>
                                        <h5>{item.name}</h5>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default Books;