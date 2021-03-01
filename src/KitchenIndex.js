import React, { Component } from 'react'
import { Button, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import logo from './picture/italy-svgrepo-com.svg';
import KitchenEditForm from './KitchenEditForm'


export default class KitchenIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kitchens: []
        }
    }

    componentDidMount() {
        axios.get("guacamole/kitchen/index")
            .then(response => {
                console.log(response)
                this.setState({
                    kitchens: response.data
                })
            })
            .catch(err => {
                console.log(err)
                console.log("could not get kitchen index")
            })
    }

    deleteKitchen = (id) => {
        axios.delete("/guacamole/kitchen/delete", {params:{id: id} })
            .then(response => {
                console.log("Deleted kitchen √√")
                console.log(response)
                const updatedkitchenIndex= [...this.state.kitchens];
                const index = updatedkitchenIndex.findIndex(x => x.id === id);
                if(index !== -1){
                    updatedkitchenIndex.splice(index, 1) 
                    this.setState({
                        kitchens: updatedkitchenIndex
                    })
                }
            })
            .catch(err => {
                console.log("error deleting Kitchen xx")
                console.log(err)
            })
    }

    editView = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            clickedKitchenId: id
        })
    }

    editKitchen = (kitchen) =>{
        axios.put("/guacamole/kitchen/edit", kitchen)
            .then(response =>{
                console.log("Edited!!")
                // console.log(response)
                const updatedKitchenIndex = [...this.state.kitchens];
                updatedKitchenIndex.put(response.data);
                this.setState({
                    kitchens: updatedKitchenIndex
                })
            })
            .catch(error =>{
                console.log("Error Editing kitchen");
                console.log(error)
            })
    }

    render() {
        return (
            <div style={{ padding: 20}}>
                <h1>Kitchens</h1>
                    <Row>
                    {this.state.kitchens.map((kitchen, index) =>
                        <Col key={index}>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Img variant="top" src='https://dummyimage.com/180x180/000000/ffffff.png&text=Kitchen+img' />
                                <Card.Body>
                                    <Card.Title>{kitchen.name} Kitchen</Card.Title>
                                    <Button variant="outline-primary"><Link to='/KitchenDetails'>Enter</Link></Button>{" "}
                                    <Button variant="outline-primary" onClick={() => this.deleteKitchen(kitchen.id)}>Delete</Button>{" "}
                                    <>
                                    <Button variant="outline-primary" onClick={() => this.editView(kitchen.id)}>Edit</Button>
                                    {(this.state.isEdit && this.state.clickedKitchenId === kitchen.id) ? <KitchenEditForm kitchen={kitchen} editKitchen={this.editKitchen}/> : null}
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
