import React from "react";
import getHomeData from "../utils/Api";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityCard from "../components/CityCard";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: [],
      image: "http://localhost:3002",
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
          <h1 className="text-center">Découvrir le monde</h1>
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-sm-12 paris">
                {this.state.cities.length !== 0 && (
                  <CityCard
                    slug={this.state.cities[0].slug}
                    cityName={this.state.cities[0].name}
                    image={this.state.image + this.state.cities[0].source}
                  />
                )}
              </div>
              <div className="col-lg-6 col-sm-12">
                <div className="row">
                  {this.state.cities.length !== 0 &&
                    this.state.cities
                      .filter((city) => {
                        return city.name !== "Paris";
                      })
                      .map((city) => {
                        console.log(city.source);
                        return (
                          <CityCard
                            cityName={city.name}
                            image={this.state.image + city.source}
                            city={city}
                          />
                        );
                      })}
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default Home;
