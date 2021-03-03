import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card, Row, Col, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import recipePic from "./picture/recipe.svg"
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeEditForm from './RecipeEditForm';
import RecipeDetails from './RecipeDetails';

const URL = "http://guacamole-env.eba-mumrxm3n.us-east-2.elasticbeanstalk.com/";
export default class RecipeIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
            sucessMessage: null,
            errorMessage: null,
        }
    }

    componentDidMount() {
        this.loadRecipeIndex();
    }

    loadRecipeIndex() {
        axios.get(URL+"guacamole/recipe/index")
            .then(response => {
                console.log(response)
                this.setState({
                    recipes: response.data
                })
            })
            .catch(err => {
                console.log(err)
                console.log("could not get recipe index")
            })
    }

    deleteRecipe = (id) => {
        axios.delete(URL+`/guacamole/recipe/delete?id=${id}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Deleted Recipe √√")
                console.log(response)
                this.setState({
                    sucessMessage: "Recipe Deleted Successfully"
                })
                this.loadRecipeIndex();
            })
            .catch(err => {
                console.log("error deleting Recipe xx")
                console.log(err)
                this.setState({
                    errorMessage: "Recipe could not be deleted"
                })
            })
    }

    editView = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            clickedRecipeId: id
        })
    }

    editRecipe = (recipe) => {
        axios.put(URL+"/guacamole/recipe/edit", recipe,
            {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })
            .then(response => {
                console.log("Edited!!")
                console.log(response)
                this.loadRecipeIndex();
                this.setState({
                    sucessMessage: "Recipe Edited Successfully"
                })
            })
            .catch(error => {
                console.log("Error Editing recipe");
                console.log(error)
            })
    }

    detailView = (id) => {
        this.setState({
            detailRecipe: !this.state.detailRecipe,
            clickedRecipeId2: id
        })
    }

    recipeDetail = (recipe) => {
        axios.get(URL+"/guacamole/recipe/detail", recipe)
            .then(response => {
                console.log("get recipe details!!")
                console.log(response)
            })
            .catch(error => {
                console.log("Error getting recipe details");
                console.log(error)
            })
    }

    render() {
        const sucessMessage = this.state.sucessMessage ? (
            <Alert variant="success">{this.state.sucessMessage}</Alert>) : null;

            const errorMessage = this.state.errorMessage ? (
                <Alert variant="danger">{this.state.errorMessage}</Alert>) : null;
        return (
            <div style={{ padding: 20 }}>
                {sucessMessage} {errorMessage}
                <h1>Recipes</h1>
                <Row>
                    {this.state.recipes.map((recipe, index) =>
                        <Col key={index}>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Img variant="top" src={recipePic} />
                                <Card.Body>
                                    <Card.Title> {recipe.name} </Card.Title>
                                    <Card.Text>
                                        Level: {recipe.level}
                                    </Card.Text>
                                    {this.props.auth ? (
                                        <>
                                            <Button variant="outline-primary" onClick={() => this.detailView(recipe.id)}>Cook it</Button>
                                            {(this.state.detailRecipe && this.state.clickedRecipeId2 === recipe.id) ? <RecipeDetails recipe={recipe} recipeDetail={this.recipeDetail} /> : null}
                                            {" "}
                                            <Button variant="outline-primary" onClick={() => this.deleteRecipe(recipe.id)}>Delete</Button>
                                            {" "}
                                            <Button variant="outline-primary" onClick={() => this.editView(recipe.id)}>Edit</Button>
                                            {(this.state.isEdit && this.state.clickedRecipeId === recipe.id) ? <RecipeEditForm recipe={recipe} editRecipe={this.editRecipe} /> : null}
                                        </>
                                    ):(
                                        <>
                                            <Button variant="outline-primary" onClick={() => this.detailView(recipe.id)}>Cook it</Button>
                                            {(this.state.detailRecipe && this.state.clickedRecipeId2 === recipe.id) ? <RecipeDetails recipe={recipe} recipeDetail={this.recipeDetail} /> : null}
                                            {" "}
                                        </>
                                    )}
                                    
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                    )}
                </Row>
            </div>
        )
    }
}
