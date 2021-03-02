import React, { Component } from 'react'
import { Card, ListGroup } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Account extends Component {
    render() {
        return (
            <div style = {{padding : 10}}>
                <h1>Account</h1>
                <ListGroup variant="flush">
                    <Card><ListGroup.Item><Link to='/UserRecipies'>User Recipies</Link></ListGroup.Item></Card>
                    <br/>
                    <Card><ListGroup.Item><Link to='/ProfileEditForm'>Profile</Link></ListGroup.Item></Card>
                    <br/>
                    <Card><ListGroup.Item><Link to="/RecipeAddForm">Add Recipe</Link></ListGroup.Item></Card>
                    <br/>
                    <Card><ListGroup.Item><Link to="/KitchenJoinForm">Join Kitchen </Link></ListGroup.Item></Card>
                    <br/>
                    <Card><ListGroup.Item><Link to='/KitchenAddForm'>Add Kitchen</Link></ListGroup.Item></Card>
                </ListGroup>
            </div>
        )
    }
}
