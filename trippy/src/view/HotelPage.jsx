import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import maison from "../components/maison.png";
import Ratings from "react-ratings-declarative";

import "../App.css";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      id: props.match.params.id,
    };
  }

  componentDidMount = () => {
    this.getHotel();
  };

  getHotel = () => {
    fetch(`http://localhost:3002/api/hotels/${this.state.id}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        this.setState({
          hotel: result.result,
        });
      });
  };

  getStars = () => {
    this.state.hotel.stars !== null ? (
      <Ratings
        rating={this.state.hotel.stars}
        widgetRatedColors="orange"
        // changeRating={this.props.hotel.stars}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    ) : (
      <Ratings
        rating={0}
        widgetRatedColors="orange"
        // changeRating={this.props.hotel.stars}
      >
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
        <Ratings.Widget />
      </Ratings>
    );
  };

  render() {
    var greenIcon = L.icon({
      iconUrl: maison,
      iconSize: [38, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });

    if (this.state.hotel.length === 0) {
      return <h2>Ca charge baka, soit patient !!</h2>;
    } else {
      return (
        <div className="container">
          <h1 className="mt-3">{this.state.hotel.name}</h1>
          {this.state.hotel.stars !== null ? (
            <Ratings
              rating={this.state.hotel.stars}
              widgetRatedColors="orange"
              // changeRating={this.props.hotel.stars}
            >
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
            </Ratings>
          ) : (
            <Ratings
              rating={0}
              widgetRatedColors="orange"
              // changeRating={this.props.hotel.stars}
            >
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
              <Ratings.Widget />
            </Ratings>
          )}
          <h2>{this.state.hotel.price}€</h2>
          <Map
            style={{ height: 500, width: 500, objectFit: "cover" }}
            center={[
              this.state.hotel.location.lat,
              this.state.hotel.location.lon,
            ]}
            zoom={12}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={greenIcon} position={this.state.hotel.location}>
              <Popup>
                <div>{this.state.hotel.price}€</div>
              </Popup>
            </Marker>
          </Map>
        </div>
      );
    }
  }
}

export default HotelPage;
