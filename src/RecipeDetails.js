import React, { Component } from 'react'
import axios from 'axios'

export default class RecipeDetails extends Component {

    constructor(props) {
        super(props)

        this.state = {
             newRecipe: props.recipe
        }
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Recipe details</h1>
                    <div><label name="user">By: {this.props.recipe.user}</label></div>
                    <div><img name="picture" src={this.props.recipe.picture}></img></div>
                    <div><label name="name">Dish Name: {this.props.recipe.name}</label></div>
                    
                    <hr></hr>
                </div>
                <div>
                    <label name="level">Level: {this.props.recipe.level}</label>{" "}
                    <label name="duration" >| Duration: {this.props.recipe.duration}</label>{" "}
                    <label name="servings">| Servings: {this.props.recipe.servings}</label>
                    <hr></hr>
                </div>
                <div>
                    <div>
                        <label name="ingrediants">Ingrediants</label>
                        <p>{this.props.recipe.ingrediants}</p>
                    </div>
                    <hr></hr>
                    <div>
                        <label name="Directions">Directions</label>
                        <p>{this.props.recipe.directions}</p>
                    </div>
                </div>
            </div>
        )
    }
}
