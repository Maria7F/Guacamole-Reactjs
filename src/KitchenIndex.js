import React, { Component } from 'react'
import { Button, Row, Col, Card , Alert} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import kitchenPic from './picture/kitchen.svg';
import KitchenEditForm from './KitchenEditForm'


export default class KitchenIndex extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kitchens: [],
            sucessMessage: null,
            errorMessage: null,
        }
    }
    
    componentDidMount(){
        this.loadKitchenIndex();
    }

    loadKitchenIndex() {
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
        axios.delete(`/guacamole/kitchen/delete?id=${id}`,
        {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response => {
                console.log("Deleted kitchen √√")
                console.log(response)
                this.setState({
                    sucessMessage: "Kitchen Deleted Successfully"
                })
                this.loadKitchenIndex();
            })
            .catch(err => {
                console.log("error deleting Kitchen xx")
                console.log(err)
                this.setState({
                    errorMessage: "error deleting Kitchen"
                })
            })
    }

    editView = (id) => {
        this.setState({
            isEdit: !this.state.isEdit,
            clickedKitchenId: id
        })
    }

    editKitchen = (kitchen) =>{
        axios.put("/guacamole/kitchen/edit", kitchen, {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        })
            .then(response =>{
                console.log("Edited!!")
                console.log(response)
                this.loadKitchenIndex();
            })
            .catch(error =>{
                console.log("Error Editing kitchen");
                console.log(error)
            })
    }

    render() {const sucessMessage = this.state.sucessMessage ? (
        <Alert variant="success">{this.state.sucessMessage}</Alert>) : null;

        const errorMessage = this.state.errorMessage ? (
            <Alert variant="danger">{this.state.errorMessage}</Alert>) : null;
    return (
            <div style={{ padding: 20}}>
                {sucessMessage} {errorMessage}
                <h1>Kitchens</h1>
                    <Row>
                    {this.state.kitchens.map((kitchen, index) =>
                        <Col key={index}>
                            <Card style={{ width: '18rem', textAlign: 'center' }}>
                                <Card.Img variant="top" src={kitchenPic} />
                                <Card.Body>
                                    <Card.Title>{kitchen.name} Kitchen</Card.Title>
                                    {this.props.auth ?(
                                    <>
                                    <Button variant="outline-primary"><Link to='/KitchenDetails'>Enter</Link></Button>{" "}
                                    <Button variant="outline-primary" onClick={() => this.deleteKitchen(kitchen.id)}>Delete</Button>{" "}
                                    <>
                                    <Button variant="outline-primary" onClick={() => this.editView(kitchen.id)}>Edit</Button>
                                    {(this.state.isEdit && this.state.clickedKitchenId === kitchen.id) ? <KitchenEditForm kitchen={kitchen} editKitchen={this.editKitchen}/> : null}
                                    </>
                                    </>
                                    ):(
                                    <>
                                    <Button variant="outline-primary"><Link to='/KitchenDetails'>Enter</Link></Button>{" "}
                                    </>)}
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
