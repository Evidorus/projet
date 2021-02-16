import React from "react";
import getHomeData from "../utils/Api";
import "../App.css";
import CityCard from "../components/CityCard";
import { BrowserRouter } from "react-router-dom";

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
                    citySlug={city.slug}
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
