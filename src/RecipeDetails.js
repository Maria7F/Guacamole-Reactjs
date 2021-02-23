import React, { Component } from 'react'

export default class RecipeDetails extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Recipe details</h1>
                    <label>By: </label>
                    <img src=''></img>
                    <label>Name:</label>
                    <hr></hr>
                </div>
                <div>
                    <label>Level: </label>|
                    <label>Duration: </label>|
                    <label>Servings: </label>
                    <hr></hr>
                </div>
                <div>
                    <div>
                        <label>Ingredients</label>
                    </div>
                    <hr></hr>
                    <div>
                        <label>Directions</label>
                    </div>
                </div>
            </div>
        )
    }
}
