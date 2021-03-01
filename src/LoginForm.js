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
    loginHandler = (user) => {
        axios
            .post("blogapp/user/authenticate", user)
            .then((response) => {
                console.log(response);
                console.log(response.data.token);
                if (response.data.token != null) {
                    localStorage.setItem("token", response.data.token);
                    let user = decode(response.data.token);
                    this.setState({
                        isAuth: true,
                        user: user
                    })
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    isAuth: false
                })
            });
    };


    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>log in</h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="email" placeholder="Enter email" onChange={this.handleChange} />
                        <Form.Text className="text-muted">
                            Example@example.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <br></br>
                        <Form.Control type="password" placeholder="Password" onChange={this.handleChange} />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        )
    }
}
