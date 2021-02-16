import React from "react";

class Home extends React.Component {
  constructor(props) {
  super(props);
  this.state = { 
    cities: [] 
    };
    componentWillUnmount() {
      getHomeData()
  }
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
