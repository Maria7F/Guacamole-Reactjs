import React, { Component } from 'react'
import { Button, Form, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class ProfileEditForm extends Component {

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Profile Edit</h1>
                <Form >
                    <Row>
                        <Col>
                            <Form.Control name = "firstName" placeholder="First name" onChange = {this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name = "lstName" placeholder="Last name" onChange = {this.handleChange}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Control name = "cirt" placeholder="City" onChange = {this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control name = "country" placeholder="Country" onChange = {this.handleChange}/>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail" onChange = {this.handleChange}>
                        <br></br>
                        <Form.Control name = "emailAddress" type="email" placeholder="Email" onChange = {this.handleChange}/>
                    </Form.Group>
                    <br/>
                    <Form.Control name = "password" type="password" placeholder="Password" onChange = {this.handleChange}/>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Save
                    </Button>
                    
                </Form>
            </div>
        )
    }
}
