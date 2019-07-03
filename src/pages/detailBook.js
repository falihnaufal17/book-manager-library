import React, { Component } from 'react';
import { Modal, Form, Col, Row, Button } from 'react-bootstrap';

//import image from assets
import MI from '../assets/img/mission-impossible.jpg'

class DetailBook extends Component {
    constructor(...args) {
        super(...args);

        this.state = {
            modalDeleteShow: false,
            modalEditShow: false
        };
    }
    render() {
        let modalClose = () => this.setState({
            modalDeleteShow: false,
            modalEditShow: false
        });
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

        const btnEdit = {
            position: 'absolute',
            width: '61px',
            height: '45px',
            left: '48px',
            top: '37px',

            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '41px',

            cursor: 'pointer',
            color: '#FFFFFF',
        }

        const btnDelete = {
            position: 'absolute',
            width: '314px',
            height: '82px',
            left: '128px',
            top: '37px',

            fontFamily: 'Open Sans',
            fontStyle: 'normal',
            fontWeight: '600',
            fontSize: '30px',
            lineHeight: '41px',

            cursor: 'pointer',
            color: '#FFFFFF',
        }
        return (
            <div style={cover}>
                <div style={btnEdit} onClick={() => this.setState({ modalEditShow: true })}>Edit</div>
                <ModalEdit
                    show={this.state.modalEditShow}
                    onHide={modalClose}
                />
                <div style={btnDelete} onClick={() => this.setState({ modalDeleteShow: true })}>Delete</div>
                <ModalDelete
                    show={this.state.modalDeleteShow}
                    onHide={modalClose}
                />
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
export class ModalDelete extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="md"
                centered
            >
                <Modal.Header closeButton>
                </Modal.Header>
                <Modal.Body>
                    <img src={require('../assets/img/checklist.png')} style={{ width: '150px', height: '150px', alignItems: 'center', marginLeft: 160, padding: 0 }} />
                    <p style={{
                        textAlign: 'center',
                        fontFamily: 'Open Sans',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '25px',
                        lineHeight: '48px',

                        color: '#000000',

                    }}>Data Dilan 1990 berhasil dihapus !</p>
                </Modal.Body>
            </Modal>
        )
    }
}


export class ModalEdit extends Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-title-vcenter">
                        Edit Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formUrlImage">
                            <Form.Label column sm="2">Url Image</Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Url Image..." />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formTitle" as={Row}>
                            <Form.Label column sm="2">Title</Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Title..." />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formDescription" as={Row}>
                            <Form.Label column sm="2">Description</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows="3" placeholder="Description..." />
                            </Col>
                        </Form.Group>
                        <Button style={{
                            backgroundColor: '#F4CF5D', float: 'right', border: 'none', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', width: '90px',
                            height: '40px',
                        }} type="submit">
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }
}
export default DetailBook;