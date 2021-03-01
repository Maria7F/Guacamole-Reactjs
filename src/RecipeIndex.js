import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeEditForm from './RecipeEditForm';
import RecipeDetails from './RecipeDetails';

export default class RecipeIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            recipes: [],
        }
    }

    componentDidMount() {
        axios.get("guacamole/recipe/index")
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
        axios.delete("/guacamole/recipe/delete", {params:{id: id} })
            .then(response => {
                console.log("Deleted Recipe √√")
                console.log(response)
                const updatedRecipeIndex= [...this.state.recipes];
                const index = updatedRecipeIndex.findIndex(x => x.id === id);
                if(index !== -1){
                    updatedRecipeIndex.splice(index, 1) 
                    this.setState({
                        recipes: updatedRecipeIndex
                    })
                }
            })
            .catch(err => {
                console.log("error deleting Recipe xx")
                console.log(err)
            })
    }

    editView = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            clickedRecipeId: id
        })
    }

    editRecipe = (recipe) =>{
        axios.put("/guacamole/recipe/edit", recipe)
            .then(response =>{
                console.log("Edited!!")
                // console.log(response)
                const updatedRecipeIndex = [...this.state.recipes];
                updatedRecipeIndex.put(response.data);
                this.setState({
                    recipes: updatedRecipeIndex
                })
            })
            .catch(error =>{
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
        axios.get("/guacamole/recipe/detail", recipe)
        .then(response =>{
            console.log("get recipe details!!")
            console.log(response)
        })
        .catch(error =>{
            console.log("Error getting recipe details");
            console.log(error)
        })
    }

    render() {
        return (
            <div style={{ padding: 20 }}>
                <h1>Recipes</h1>
                
                    <Row>
                        {this.state.recipes.map((recipe, index) =>
                        <Col key={index}>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Img variant="top" src='https://dummyimage.com/180x180/000000/ffffff.png&text=Dish+img' />
                                <Card.Body>
                                    <Card.Title> {recipe.name} </Card.Title>
                                    <Card.Text>
                                        Level: {recipe.level}
                                    </Card.Text>
                                    <>
                                    <Button variant="outline-primary" onClick={() => this.detailView(recipe.id)}>Cook it</Button>
                                    {(this.state.detailRecipe && this.state.clickedRecipeId2 === recipe.id) ? <RecipeDetails recipe={recipe} recipeDetail={this.recipeDetail}/> : null}
                                    </>
                                    {" "}
                                    <Button variant="outline-primary" onClick={() => this.deleteRecipe(recipe.id)}>Delete</Button>
                                    {" "}
                                    <>
                                    <Button variant="outline-primary" onClick={() => this.editView(recipe.id)}>Edit</Button>
                                    {(this.state.isEdit && this.state.clickedRecipeId === recipe.id) ? <RecipeEditForm recipe={recipe} editRecipe={this.editRecipe}/> : null}
                                    </>
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
