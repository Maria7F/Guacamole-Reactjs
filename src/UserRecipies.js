import React, { Component } from 'react'

import { Button, Card, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

export default class UserRecipies extends Component {
    render() {
        return (
            <div style={{ padding: 20 }}>
                <h1>User name Recipes</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img variant="top" src='https://dummyimage.com/180x180/000000/ffffff.png&text=Dish+img' />
                            <Card.Body>
                                <Card.Title>Dish Name</Card.Title>
                                <Card.Text>
                                    Level: Easy
                                </Card.Text>
                                <Button variant="outline-primary" href="./RecipeEditForm">Edit</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}
