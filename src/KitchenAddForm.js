import React, { Component } from 'react'
import { Button, Form, Alert} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class KitchenAddForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
             newKitchen: {},
             sucessMessage: null,
             errorMessage: null,
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
        this.addKitchen(this.state.newKitchen);
    }

    addKitchen = (kitchen) => {
        axios.post("https://cors-anywhere.herokuapp.com/http://guacamole-env.eba-mumrxm3n.us-east-2.elasticbeanstalk.com/kitchen/add", kitchen,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
        .then(response => {
            console.log("Added kitchen √√")
            this.setState({
                sucessMessage:"Kitchen Added Successfully"
            })
        })
        .catch(err => {
            console.log("error adding kitchen xx")
            console.log(err)
            this.setState({
                errorMessage:"Error could not add kitchen"
            })
        })
    }

    render() {
        const sucessMessage = this.state.sucessMessage ? (
            <Alert variant="success">{this.state.sucessMessage}</Alert>) : null;

            const errorMessage = this.state.errorMessage ? (
                <Alert variant="danger">{this.state.errorMessage}</Alert>) : null;
        return (
            <div style={{ padding: 10 }}>
                {sucessMessage} {errorMessage}
                <h1>Add Kitchen</h1>
                <Form >
                    <Form.Group controlId="formBasicEmail">
                        <br></br>
                        <Form.Control type="text" placeholder="Kitchen's Name" name = "name" onChange = {this.handleChange}/>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit" onClick = {this.handleSubmit}>
                        Add
                    </Button>
                </Form>
            </div>
        )
    }
}
