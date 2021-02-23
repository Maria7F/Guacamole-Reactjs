import React, { Component } from 'react'
import { Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class KitchenJoinForm extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Choose Kitchen</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Kitchens</Form.Label>
                        <Form.Control as="select">
                            <option>Italian</option>
                            <option>Mexican</option>
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Join
                    </Button>
                </Form>
            </div>
        )
    }
}
