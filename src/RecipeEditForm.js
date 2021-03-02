import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'

export default class RecipeEditForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
             newRecipe: props.recipe
        }
    }

    handleChange= (event) =>{
        const attributeToChange = event.target.name
        const newValue = event.target.value
        const updatedRecipe = {...this.state.newRecipe}
        
        updatedRecipe[attributeToChange] = newValue
        console.log(updatedRecipe)
        
        this.setState({
            newRecipe: updatedRecipe
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.props.editRecipe(this.state.newRecipe)
    }

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Edit Recipe</h1>
                <Form >
                    Dish Name:
                        <Form.Control type="text" name="name" onChange = {this.handleChange} placeholder = {this.props.recipe.name}/>
                        <br />
                        Duration: 
                        <Form.Control type="text"  name="duration" onChange = {this.handleChange} placeholder = {this.props.recipe.duration}/>
                        <br />
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Level</Form.Label>
                            <Form.Control as="select"  name="level" onChange = {this.handleChange} placeholder = {this.props.recipe.level}>
                                <option>Easy</option>
                                <option>Intermediat</option>
                                <option>Hard</option>
                            </Form.Control>
                        </Form.Group>
                        <br />
                        Servings
                        <Form.Control type="text"  name="servings" onChange = {this.handleChange} placeholder = {this.props.recipe.servings}/>
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ingrediants</Form.Label>
                            <Form.Control as="textarea" rows={3}  name="ingrediants" onChange = {this.handleChange} placeholder = {this.props.recipe.ingrediants}/>
                        </Form.Group>
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Directions</Form.Label>
                            <Form.Control as="textarea" rows={3}  name="directions" onChange = {this.handleChange} placeholder = {this.props.recipe.directions}/>
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1"  name="picture" label="Choose Image" />
                        </Form.Group>
                    <br></br>
                    <Button type="submit" variant="primary" onClick={this.handleSubmit}>Save</Button>
                </Form>
            </div>
        )
    }
}
