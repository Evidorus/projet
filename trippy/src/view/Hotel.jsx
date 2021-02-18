import React from "react";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";
import "../App.css"


class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      name: "",
      center: [],
      prix: 0,
      zoom: 0,
      city: props.match.params.city
    };
  }

  componentDidMount = () => {
    this.getCity();
  };

  getCity = () => {
    fetch(`http://localhost:3002/api/hotels/city/${this.state.city}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          hotels: result.results,
          center: result.center,
        });
        console.log(result)
      });
  };

  render() {
    if (this.state.hotels.length === 0) {
      return <h1 className= "mb-5">Chargement</h1>
    } else {
      return (
        <>
          <h2 className="text-center"> Voici la page Hotel </h2>

          <div className="row">
            {this.state.hotels
              .map((hotel) => {
                return (
                  <div className="col-12 col-sm-6 col-lg-4 d-flex justify-content-center">
                    <HotelCard hotel={hotel}></HotelCard>
                  </div>)
              })}
          </div>
          <div>
            <h1 className="text-center">Carte</h1>
            <HotelMap hotel={this.state.hotels} center={this.state.center}></HotelMap>
          </div>
        </>
      );
    }

  }
}

export default Hotel;
