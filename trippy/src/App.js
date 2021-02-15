import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import NavBar from "./components/NavBar"
import Home from "./view/Home"
import Hotel from "./view/Hotel"
import HotelPage from "./view/HotelPage"
import Error404 from "./view/Error404"
import Api from './utils/Api'
import Config from '../src/utils/Api'

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: "",
    }
  }

  render(){
    console.log(Config)
    return(
      <Router>
        <NavBar></NavBar>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/home" component={Home}/>
          <Route path="/hotel" component={Hotel}/>
          <Route path="/hotel/:city" component={Hotel}/>
          <Route path="/hotelPage" component={HotelPage}/>
          <Route path="/hotelPage/:id" component={HotelPage}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </Router>
    )
  }
}
