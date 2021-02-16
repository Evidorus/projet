import React from "react";
import getHomeData from "../utils/Api";
import "../App.css"

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
    if (this.state.cities.length === 0) {
      return <h2 className="caption">Les villes sont en train de charger</h2>;
    } else {
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
}

export default Home;
