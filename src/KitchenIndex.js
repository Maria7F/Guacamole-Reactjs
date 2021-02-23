import React, { Component } from 'react'
import { Button, Row, Col, Card} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class KitchenIndex extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             kitchens: []
        }
    }

    // componentDidMount(){
    //     axios.get("guacamole/kitchen/index")
    //     .then(response => {
    //         console.log(response)
    //         this.setState({
    //             kitchens: response.data
    //         })
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         console.log("could not get kitchen index")
    //     })
    // }

    render() {
        return (
            <div style={{ padding: 20 }}>
                <h1>Kitchens</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem', textAlign: 'center' }}>
                            <Card.Img variant="top" src='https://dummyimage.com/180x180/000000/ffffff.png&text=Kitchen+img' />
                            <Card.Body>
                                <Card.Title>Kitchen Name</Card.Title>
                                <Button variant="outline-primary"><Link to='/KitchenDetails'>Enter</Link></Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}
