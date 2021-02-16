import React from "react";
import getHomeData from "../utils/Api"

class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = { 
    cities: [] 
    };
    
  }

  componentDidMount() {
    getHomeData()
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
  }

  render() {
    return (
      <>
        <h1>Voici la page Home </h1>
      </>
    );
  }
}

export default Home;
