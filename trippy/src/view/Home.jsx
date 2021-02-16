import React from "react";
import getHomeData from "../utils/Api";
<<<<<<< HEAD
import "../App.css"
=======
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CityCard from "../components/CityCard";
>>>>>>> cityCard

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
        <BrowserRouter>
          <div className="container">
            <h1>Découvrir le monde </h1>
            <div className="row ">
              {this.state.cities.map((city) => {
                return (
                  <CityCard
                    cityName={city.name}
                    cityImage={city.source}
                  ></CityCard>
                );
              })}
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}

export default Home;
