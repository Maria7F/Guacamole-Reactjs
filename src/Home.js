import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CardGroup, Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './picture/logo2.svg';
import logo1 from './picture/logo1.svg';




export default class Home extends Component {
    render() {
        return (
            <>
            <br/>
                <CardGroup className="justify-content-center">
                    
                    <Card.Img variant="top" src={logo1} width="500" height="500"/>
                </CardGroup>
            </>
        )
    }
}
