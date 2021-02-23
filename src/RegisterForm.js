import React, { Component } from 'react'
import { Button, Alert, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RegisterForm extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Register</h1>
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
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Example@example.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <br></br>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control as="select">
                            <option>User</option>
                            <option>Admin</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
