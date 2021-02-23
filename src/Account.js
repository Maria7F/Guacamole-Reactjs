import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Account extends Component {
    render() {
        return (
            <div>
                <h1>Account</h1>
                <ListGroup variant="flush">
                    <ListGroup.Item><Link to='/UserRecipies'>User Recipies</Link></ListGroup.Item>
                    <ListGroup.Item><Link to='/ProfileEditForm'>Profile</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/RecipeAddForm">Add Recipe</Link></ListGroup.Item>
                    <ListGroup.Item><Link to="/KitchenJoinForm">Join Kitchen </Link></ListGroup.Item>
                    <ListGroup.Item><Link to='/KitchenAddForm'>Add Kitchen</Link></ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
}
