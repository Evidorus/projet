import React from "react";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";
import "../App.css"
import {BrowserRouter} from "react-router-dom"


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
    if (this.state.hotels.length === 0){
      return <h1>Chargement</h1>
    } else {
      return (
        <BrowserRouter>
          <div>
            <h1 className="caption">Voici la page Hotel </h1>
            {this.state.hotels
            .map((hotel) => {
              return <HotelCard hotel={hotel}></HotelCard>
            })}
          </div>
          <div>
            <h1>Map de l'hotel</h1>
            <HotelMap hotel={this.state.hotels} center={this.state.center}></HotelMap>
          </div>
        </BrowserRouter>
      );
    }
    
  }
}

export default Hotel;
