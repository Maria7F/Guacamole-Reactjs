import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Figure } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './picture/logo2.svg';




export default class Home extends Component {
    render() {
        return (
            <div>
                <Figure >
                    <Figure.Image
                        width={"100%"}
                        height={180}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </div>
        )
    }
}
