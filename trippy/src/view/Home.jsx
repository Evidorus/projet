import React from "react";
import getHomeData from "../utils/Api";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CityCard from "../components/CityCard";

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
        <div>
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
        </div>
      );
    }
  }
}

export default Home;
