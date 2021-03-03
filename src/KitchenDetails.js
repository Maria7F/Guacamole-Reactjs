import React, { Component } from 'react'
import { Button, Card, Row, Col } from 'react-bootstrap'
import userImg from "./picture/userImg.svg"


export default class KitchenDetails extends Component {
    render() {
        return (
            <div style={{ padding: 20}}>
                <h1>kitchen detail</h1>
                {/* {this.state.kitchens.map((kitchen, index) => */}
                    <Row >
                        <Col>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Img variant="top" src={userImg} />
                                <Card.Body>
                                    <Card.Title>User Name</Card.Title>
                                    {/* <>
                                    <Button variant="outline-primary" onClick={() => this.editView(kitchen.id)}>Edit</Button>
                                    {(this.state.isEdit && this.state.clickedKitchenId === kitchen.id) ? <KitchenEditForm kitchen={kitchen} editKitchen={this.editKitchen}/> : null}
                                    </> */}
                                </Card.Body>
                            </Card>
                            <br />
                        </Col>
                    </Row>
                {/* )} */}
            </div>
        )
    }
}
