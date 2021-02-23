import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class LoginForm extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>log in</h1>
                <Form>
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
                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
            </div>
        )
    }
}
