import React, { Component } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProfileEditForm extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Profile Edit</h1>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Control placeholder="City" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Country" />
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                </Form>
            </div>
        )
    }
}
