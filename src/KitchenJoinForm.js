import React, { Component } from 'react'
import { Button,Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'



export default class KitchenJoinForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            kitchens: []
        }
    }

    componentDidMount(){
        this.loadKitchenIndex();
    }

    loadKitchenIndex() {
        axios.get("https://cors-anywhere.herokuapp.com/http://guacamole-env.eba-mumrxm3n.us-east-2.elasticbeanstalk.com/kitchen/index")
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

    render() {
        return (
            <div style={{ padding: 10 }}>
                <h1>Choose Kitchen</h1>
                <Form>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Kitchens</Form.Label>
                        <Form.Control as="select">
                        {this.state.kitchens.map((kitchen, index) =>
                        <option key = {index}>{kitchen.name}</option>
                        )} 
                        </Form.Control>
                    </Form.Group>
                    <br></br>
                    <Button variant="primary" type="submit">
                        Join
                    </Button>
                </Form>
            </div>
        )
    }
}
