import React, { Component } from 'react';
import { Modal, Form, Button, Col, Row } from 'react-bootstrap';
import book from '../data/books';

import swal from 'sweetalert2'

export default class ModalForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            book: book,
            img: '',
            name: '',
            description: '',
            created_at: new Date(),
            updated_at: new Date()
        }
    }
    render() {
        const addBook = () => {
            this.state.book.push({
                'name': this.state.name,
                'img': this.state.img,
                'description': this.state.description,
                'created_at': this.state.created_at,
                'updated_at': this.state.updated_at
            });

            swal.fire({
                type: 'success',
                title: 'Add Book',
                text: 'Successfully Added Book',
            })

            console.log(this.state.book);
        }
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-title-vcenter"
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-title-vcenter">
                        Add Data
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} controlId="formUrlImage">
                            <Form.Label column sm="2">Url Image</Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Url Image..." onChange={(e) => this.setState({ img: e.target.value })} />
                            </Col>
                        </Form.Group>

                        <Form.Group controlId="formTitle" as={Row}>
                            <Form.Label column sm="2">Title</Form.Label>
                            <Col sm="10">
                                <Form.Control placeholder="Title..." onChange={(e) => this.setState({ name: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Form.Group controlId="formDescription" as={Row}>
                            <Form.Label column sm="2">Description</Form.Label>
                            <Col sm="10">
                                <Form.Control as="textarea" rows="3" placeholder="Description..." onChange={(e) => this.setState({ description: e.target.value })} />
                            </Col>
                        </Form.Group>
                        <Button style={{
                            backgroundColor: '#F4CF5D', float: 'right', border: 'none', boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.1)', width: '90px',
                            height: '40px',
                        }} onClick={addBook.bind(this)}>
                            Save
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        )
    }


}