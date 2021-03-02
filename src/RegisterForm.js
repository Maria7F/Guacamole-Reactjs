import React, { Component } from 'react'
import { Button, Alert, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class RegisterForm extends Component {

    state = {}

    registerHandler = () => {
        this.props.register(this.state);
    }

    changeHandler = (e) => {
        let temp = { ... this.state }
        temp[e.target.name] = e.target.value;
        this.setState(temp)
        console.log(temp);
    }

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Register</h1>
                <Form>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" name="firstName" onChange={this.changeHandler} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" name="lastName" onChange={this.changeHandler} />
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Control placeholder="City" name="city" onChange={this.changeHandler} />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Country" name="country" onChange={this.changeHandler} />
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="email" placeholder="Enter email" name="emailAddress" onChange={this.changeHandler} />
                        <Form.Text className="text-muted">
                            Example@example.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" >
                        <br></br>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={this.changeHandler} />
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control as="select" name="userRole" onChange={this.changeHandler}>
                            <option defaultValue value="ROLE_USER">User</option>
                            <option value="ROLE_ADMIN">Admin</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" onClick = {this.registerHandler}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
