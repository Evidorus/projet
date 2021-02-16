import React from "react";
import getHomeData from "../utils/Api";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
    };
  }

  componentDidMount() {
    getHomeData()
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({
          cities: response.cities,
        });
      });
  }

  render() {
    return (
      <>
        <h1>Découvrir le monde </h1>

        {this.state.cities.map((city) => {
          return <p>{city.name}</p>;
        })}
      </>
    );
  }
}

export default Home;
