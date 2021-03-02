import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { decode } from "jsonwebtoken";



export default class LoginForm extends Component {

    state = {}

    loginHandler = () => {
        this.props.login(this.state);
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
                <h1>log in</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="email" placeholder="Enter email" name = "emailAddress" onChange={this.changeHandler} />
                        <Form.Text className="text-muted">
                            Example@example.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <br></br>
                        <Form.Control type="password" placeholder="Password" name = "password" onChange={this.changeHandler} />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" onClick={this.loginHandler}>
                        Log In
                    </Button>
                </Form>
            </div>
        )
    }
}
