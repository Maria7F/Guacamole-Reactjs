import React, { Component } from 'react'
import { Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class KitchenAddForm extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Add Kitchen</h1>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="text" placeholder="Kitchen's Name" />
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </div>
        )
    }
}
