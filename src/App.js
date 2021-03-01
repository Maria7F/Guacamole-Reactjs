import React, { Component } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import KitchenIndex from './KitchenIndex';
import RecipeIndex from './RecipeIndex';
import Account from './Account'
import LoginForm from './LoginForm'
import RegisterForm from "./RegisterForm";
import ProfileEditForm from "./ProfileEditForm"
import RecipeAddForm from "./RecipeAddForm"
import KitchenJoinForm from "./KitchenJoinForm"
import KitchenAddForm from "./KitchenAddForm"
import KitchenDetails from "./KitchenDetails"
import RecipeDetails from "./RecipeDetails"
import UserRecipies from "./UserRecipies";
import RecipeEditForm from "./RecipeEditForm";
import logo from './picture/logo2.svg';
import axios from 'axios';
import { decode } from "jsonwebtoken";

export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    message: null,
  };
  registerHandler = (user) => {
    axios
      .post("blogapp/user/registration", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  loginHandler = (user) => {
    axios
      .post("blogapp/user/authenticate", user)
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        if(response.data.token != null){
          localStorage.setItem("token", response.data.token);
          let user = decode(response.data.token);
          this.setState({
            isAuth: true,
            user: user
          })
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isAuth: false
        })
      });
  };

  render() {
    return (
      <div>
        <Router>
          <Navbar bg="dark" variant="dark" className="float-content-center">
            <Navbar.Brand href="/">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}Guacamole
            </Navbar.Brand>
            
            <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
              <Nav.Link eventKey="link-4"> <Link to="/Account">Account</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-5"> <Link to="/LoginForm">Login</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-6" > <Link to='/RegisterForm' >Register</Link> </Nav.Link>
            </Nav.Item>
            </Navbar.Collapse>
          </Navbar>
          <Nav variant="tabs" defaultActiveKey="">
            <Nav.Item>
              <Nav.Link eventKey="link-1"> <Link to='/'>Home</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-2"> <Link to='/Recipe'>Recipe</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-3"> <Link to='/Kitchen'>Kitchen</Link> </Nav.Link>
            </Nav.Item>
          </Nav>

          <div>
            <Route exact path='/' component={Home}></Route>
            <Route path='/Recipe' component={RecipeIndex}></Route>
            <Route path='/Kitchen' component={KitchenIndex}></Route>
            <Route path='/Account' component={Account}></Route>
            <Route path="/LoginForm" component={() => <LoginForm login={this.loginHandler} />}></Route>
            <Route path='/RegisterForm' component={RegisterForm}></Route>
            <Route path='/UserRecipies' component={UserRecipies}></Route>
            <Route path='/ProfileEditForm' component={ProfileEditForm}></Route>
            <Route path='/RecipeAddForm' component={RecipeAddForm}></Route>
            <Route path='/KitchenJoinForm' component={KitchenJoinForm}></Route>
            <Route path='/KitchenAddForm' component={KitchenAddForm}></Route>
            <Route path='/KitchenDetails' component={KitchenDetails}></Route>
            <Route path='/RecipeDetails' component={RecipeDetails}></Route>
            <Route path='/RecipeEditForm' component={RecipeEditForm}></Route>
          </div>
        </Router>
      </div>
    )
  }
}
