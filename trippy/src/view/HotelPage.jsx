import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import maison from "../components/maison.png";
import Ratings from "react-ratings-declarative";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import "../App.css";

class HotelPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotel: [],
      id: props.match.params.id,
      images: [
        {
          original: "https://picsum.photos/id/1018/1000/600/",
          thumbnail: "https://picsum.photos/id/1018/1000/600/",
        },
      ],
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
          images: result.result.pictures.map((picture) => {
            return {
              original: picture,
              thumbnail: picture,
            };
          }),
        });
      });
  };

  images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];
  /* getStaticImages = () => {
    let images = [];
    this.state.hotel.pictures.map((picture) => {
      return images.push({
        original: { picture },
        thumbnail: { picture },
      });
    });
  }; */

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
          <h2 className="fw-bold">{this.state.hotel.price}€</h2>
          <ImageGallery items={this.state.images} />
          {this.state.hotel.commodities.map((commodity) => {
            if (commodity === "wifi") {
              return (
                <p className="m-2">
                  <i className="fas fa-wifi"></i> {commodity}
                </p>
              );
            }
            if (commodity === "restaurant") {
              return (
                <p className="m-2">
                  <i class="fas fa-utensils"></i> {commodity}
                </p>
              );
            }
            if (commodity === "bar") {
              return (
                <p className="m-2">
                  <i className="fas fa-glass-martini-alt"></i> {commodity}
                </p>
              );
            }
            if (commodity === "disabled access") {
              return (
                <p className="m-2">
                  <i className="fas fa-wheelchair"></i> {commodity}
                </p>
              );
            }
            if (commodity === "non smoking") {
              return (
                <p className="m-2">
                  <i className="fas fa-smoking-ban"></i> {commodity}
                </p>
              );
            }
            if (commodity === "multilingual staff") {
              return (
                <p className="m-2">
                  <i className="fas fa-language"></i> {commodity}
                </p>
              );
            }
            if (commodity === "breakfast included") {
              return (
                <p className="m-2">
                  <i className="fas fa-coffee"></i> {commodity}
                </p>
              );
            }
            if (commodity === "air conditioning") {
              return (
                <p className="m-2">
                  <i className="fas fa-fan"></i> {commodity}
                </p>
              );
            }
            if (commodity === "animals") {
              return (
                <p className="m-2">
                  <i className="fas fa-dog"></i> {commodity}
                </p>
              );
            }
            if (commodity === "conciergerie") {
              return (
                <p className="m-2">
                  <i className="fas fa-house-user"></i> {commodity}
                </p>
              );
            }
            if (commodity === "family") {
              return (
                <p className="m-2">
                  <i className="fas fa-users"></i> {commodity}
                </p>
              );
            }
            if (commodity === "meeting rooms") {
              return (
                <p className="m-2">
                  <i className="fas fa-people-arrows"></i> {commodity}
                </p>
              );
            }
            if (commodity === "minibar") {
              return (
                <p className="m-2">
                  <i className="fas fa-glass-whiskey"></i> {commodity}
                </p>
              );
            }
            if (commodity === "gym") {
              return (
                <p className="m-2">
                  <i className="fas fa-dumbbell"></i> {commodity}
                </p>
              );
            }
            if (commodity === "suites") {
              return (
                <p className="m-2">
                  <i className="fab fa-fort-awesome-alt"></i> {commodity}
                </p>
              );
            }
            if (commodity === "room service") {
              return (
                <p className="m-2">
                  <i className="fas fa-hand-sparkles"></i> {commodity}
                </p>
              );
            }
            if (commodity === "swimming pool") {
              return (
                <p className="m-2">
                  <i className="fas fa-swimmer"></i> {commodity}
                </p>
              );
            }
            if (commodity === "shuttle") {
              return (
                <p className="m-2">
                  <i className="fas fa-thumbs-up"></i> {commodity}
                </p>
              );
            }
            if (commodity === "spa") {
              return (
                <p className="m-2">
                  <i className="fas fa-spa"></i> {commodity}
                </p>
              );
            } else {
              return (
                <p className="m-2">
                  <i className="fas fa-tshirt"></i> {commodity}
                </p>
              );
            }
          })}
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
                <div>
                  <p>{this.state.hotel.price}€</p>
                  <p>{this.state.hotel.address}</p>
                </div>
              </Popup>
            </Marker>
          </Map>
        </div>
      );
    }
  }
}

export default HotelPage;
