import React from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      test: "",
    }
  }

  render(){
    return(
      <Router>
        <h2>APP.JS</h2>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Home" component={Home}/>
          <Route path="/hotels" component={Hotels}/>
          <Route path="/hotels/:city" component={Hotels}/>
          <Route path="/hotels" component={HotelPage}/>
          <Route path="/hotels/:id" component={HotelPage}/>
          <Route path="*" component={Error404}/>
        </Switch>
      </Router>
    )
  }
}
