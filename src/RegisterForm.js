import React, { Component } from 'react'
import { Button, Alert, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class RegisterForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
             newUser: {}
        }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updateduser = {...this.state.newUser}
        updateduser[attributeToChange] = newValue
        console.log(updateduser)
        this.setState({
            newUser: updateduser
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.addUser(this.state.newUser);
    }

    addUser = (user) => {
        axios.post("guacamole/user/registration",user)
        .then(response => {
            console.log("Added User √√")
        })
        .catch(err => {
            console.log("error adding user xx")
            console.log(err)
        })
    }

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Register</h1>
                <Form onSubmit = {this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control placeholder="First name" name = "firstName" onChange = {this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Last name" name = "lastName" onChange = {this.handleChange}/>
                        </Col>
                    </Row>
                    <br></br>
                    <Row>
                        <Col>
                            <Form.Control placeholder="City" name = "city" onChange = {this.handleChange}/>
                        </Col>
                        <Col>
                            <Form.Control placeholder="Country" name = "address.country" onChange = {this.handleChange}/>
                        </Col>
                    </Row>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="email" placeholder="Enter email" name = "emailAddress" onChange = {this.handleChange}/>
                        <Form.Text className="text-muted">
                            Example@example.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" >
                        <br></br>
                        <Form.Control type="password" placeholder="Password" name = "password" onChange = {this.handleChange}/>
                    </Form.Group>
                    <br></br>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Role</Form.Label>
                        <Form.Control as="select" name = "userRole" onChange = {this.handleChange}>
                            <option defaultValue value="USER">User</option>
                            <option value = "ADMIN">Admin</option>
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
