import React, { Component } from 'react'
import axios from 'axios';
import { Button, Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

export default class RecipeIndex extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //          recipes: []
    //     }
    // }

    // componentDidMount(){
    //     axios.get("guacamole/recipe/index")
    //     .then(response => {
    //         console.log(response)
    //         this.setState({
    //             recipes: response.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         console.log("could not get recipe index")
    //     })
    // }


    render() {
        return (
            <div style={{ padding: 20 }}>
                <h1>Recipes</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img variant="top" src='https://dummyimage.com/180x180/000000/ffffff.png&text=Dish+img' />
                            <Card.Body>
                                <Card.Title>Dish Name</Card.Title>
                                <Card.Text>
                                    Level: Easy
                                </Card.Text>
                                <Button variant="outline-primary" href='./RecipeDetails'><Link to="/RecipeDetails">Cook it</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}
