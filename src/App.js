import React, { Component } from 'react'
import Home from './Home'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, Alert ,Fade} from 'react-bootstrap'
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

const URL = "http://guacamole-env.eba-mumrxm3n.us-east-2.elasticbeanstalk.com/";
const CORS = "https://cors-anywhere.herokuapp.com/"

export default class App extends Component {

  state = {
    isAuth: false,
    user: null,
    isRegistered: false,
    sucessMessage: null,
    errorMessage: null,
    kitchens: [],
  };

  componentDidMount() {
    let token = localStorage.getItem("token");
    if (token != null) {
      let user = decode(token);
      if (user) {
        this.setState({
          isAuth: true,
          user: user,
        });
      } else if (!user) {
        localStorage.removeItem("token");
        this.setState({
          isAuth: false,
        });
      }
    }
  }

  registerHandler = (user) => {
    axios
      .post(CORS+URL+"guacamole/user/registration", user)
      .then((response) => {
        console.log(response);
        this.setState({
          isRegistered: true,
          sucessMessage: "Registered Successfully",
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          errorMessage: "Error occured while regitering"
        })
      });
  };

  loginHandler = (user) => {
    axios
      .post(CORS+URL+"guacamole/user/authenticate", user)
      .then((response) => {
        console.log(response);
        console.log(response.data.token);
        console.log(decode(response.data.token));
        if (response.data.token != null) {
          localStorage.setItem("token", response.data.token);
          let user = decode(response.data.token);
          this.setState({
            isAuth: true,
            user: user,
            sucessMessage: "Successfully logged in"
          })
        } else {
          this.setState({
            isAuth: false,
            user: null,
            errorMessage: "Incorrect Email Adress or Password"
          })
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isAuth: false,
          errorMessage: "Error Logging in"
        })
      });
  };

  onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    this.setState({
      isAuth: false,
      user: null,
      sucessMessage: "Successfully Logged out"
    })
  }

  render() {
    const { isAuth } = this.state;
    const { isRegistered } = this.setState;
    
    const errorMessage = this.state.errorMessage ? (
      <Alert variant="danger">{this.state.errorMessage}</Alert>) : null;

    const sucessMessage = this.state.sucessMessage ? (
      <Alert variant="success" id="fade">{this.state.sucessMessage}</Alert>) : null;

    return (
      <div>
        <Router>
          <Navbar bg="dark" variant="dark" className="float-content-center">
            <Navbar.Brand href = "/Home">
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"/>{' '}
                Guacamole
            </Navbar.Brand>

            <Navbar.Collapse className="justify-content-end">

              {isAuth ? (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="link-4"> <Link to="/Account">Account</Link> </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="link-6"> <Link to="/" onClick={this.onLogoutHandler}>Logout</Link> </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                  <>
                    <Nav.Item>
                      <Nav.Link eventKey="link-5"> <Link to="/Login">Login</Link></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="link-7" > <Link to='/Register' >Register</Link> </Nav.Link>
                    </Nav.Item>
                  </>
                )}

            </Navbar.Collapse>
          </Navbar>
          <Nav variant="tabs" defaultActiveKey="">
            <Nav.Item>
              <Nav.Link eventKey="link-1"> <Link to='/'>Home</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-2"> <Link to='/Recipes'>Recipe</Link> </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link eventKey="link-3"> <Link to='/Kitchens'>Kitchen</Link> </Nav.Link>
            </Nav.Item>
          </Nav>
           {errorMessage} {sucessMessage}
           
          <div>
            <Route exact path='/' component={Home}></Route>
            <Route  path='/Home' component={Home}></Route>
            <Route path='/Recipes' component={() => <RecipeIndex auth={this.state.isAuth} />}></Route>
            <Route path='/Kitchens' component={() => <KitchenIndex auth={this.state.isAuth}/>}></Route>
            <Route path='/Account' component={Account}></Route>
            <Route path="/Login" component={() => isAuth ? <Home /> : <LoginForm login={this.loginHandler} />}></Route>
            <Route path='/Register' component={() => isRegistered ? <LoginForm /> : <RegisterForm register={this.registerHandler} />}></Route>
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
