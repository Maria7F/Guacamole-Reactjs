import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class RecipeEditForm extends Component {
    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Edit Recipe</h1>
                <Form>
                        <Form.Control type="text" placeholder="Dish Name" />
                        <br />
                        <Form.Control type="text" placeholder="Duration" />
                        <br />
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Level</Form.Label>
                            <Form.Control as="select">
                                <option>Easy</option>
                                <option>Intermediat</option>
                                <option>Hard</option>
                            </Form.Control>
                        </Form.Group>
                        <br />
                        <Form.Control type="text" placeholder="Servings" />
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Ingrediants</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <br />
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Directions</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <br />
                        <Form.Group>
                            <Form.File id="exampleFormControlFile1" label="Choose Image " />
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
