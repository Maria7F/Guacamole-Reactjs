import React, { Component } from 'react'
import { Button, Alert, Form, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

export default class RecipeAddForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
             newRecipe: {}
        }
    }

    handleChange = (event) => {
        const attributeToChange = event.target.name
        const newValue = event.target.value

        const updatedrecipe = {...this.state.newRecipe}
        updatedrecipe[attributeToChange] = newValue
        console.log(updatedrecipe)
        this.setState({
            newRecipe: updatedrecipe
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.addRecipe(this.state.newRecipe);
    }

    addRecipe = (recipe) => {
        axios.post("guacamole/recipe/add",recipe)
        .then(response => {
            console.log("Added Recipe √√")
        })
        .catch(err => {
            console.log("error adding recipe xx")
            console.log(err)
        })
    }

    

    render() {
        return (
            <div style={{ padding: 10 }} >
                <h1>Add Recipe</h1>
                <Form  onSubmit = {this.handleSubmit}>
                        <Form.Control name="name" onChange = {this.handleChange} type="text" placeholder="Dish Name" />
                        <br />
                        <Form.Control name="duration" onChange = {this.handleChange} type="text" placeholder="Duration" />
                        <br />
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Level</Form.Label>
                            <Form.Control as="select" name="level" onChange = {this.handleChange}>
                                <option defaultValue>Easy</option>
                                <option>Intermediat</option>
                                <option>Hard</option>
                            </Form.Control>
                        </Form.Group>
                        <br />
                        <Form.Control name="servings" onChange = {this.handleChange} type="text" placeholder="Servings" />
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ingrediants</Form.Label>
                            <Form.Control name="ingrediants" onChange = {this.handleChange} as="textarea" rows={3} />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Directions</Form.Label>
                            <Form.Control name="directions" onChange = {this.handleChange} as="textarea" rows={3} />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.File name="picture" onChange = {this.handleChange} id="exampleFormControlFile1" label="Choose Image " />
                        </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Add Recipe
                </Button>
                </Form>
            </div>
        )
    }
}
