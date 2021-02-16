import React from "react";
import HotelCard from "../components/HotelCard";
import HotelMap from "../components/HotelMap";

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotels: [],
      name: "",
      center: [],
      prix: 0,
      zoom: 0,
    };
  }

  componentDidMount = () => {
    this.getCity("paris");
  };

  getCity = (city) => {
    fetch(`http://localhost:3002/api/hotels/city/${city}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          hotels: result.results,
          center: result.center,
        });
      });
  };

  render() {
    if (this.state.hotels.length === 0){
      return <h1>Chargement</h1>
    } else {
      return (
        <>
          <div>
            <h1>Voici la page Hotel </h1>
            {this.state.hotels
            .map((hotel) => {
              return <HotelCard hotel={hotel}></HotelCard>
            })}
          </div>
          <div>
            <h1>Map de l'hotel</h1>
            <HotelMap hotel={this.state.hotels} center={this.state.center}></HotelMap>
          </div>
        </>
      );
    }
    
  }
}

export default Hotel;
