import React, { Component } from 'react'
import { Button, Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class KitchenAddForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
             newKitchen: props.kitchen
        }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const updatedKitchen= {...this.state.newKitchen}

        updatedKitchen[attributeToChange] = newValue
        console.log(updatedKitchen)

        this.setState({
            newKitchen: updatedKitchen
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.editKitchen(this.state.newKitchen);
    }



    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Add Kitchen</h1>
                <Form onSubmit = {this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="text" placeholder="Kitchen's Name" name = "name" onChange = {this.handleChange}/>
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
