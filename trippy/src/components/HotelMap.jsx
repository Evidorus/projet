import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import HotelMarker from "./HotelMarker";
import "leaflet/dist/leaflet.css";
import maison from "./maison.png";
import L from "leaflet";

class HotelMap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    var greenIcon = L.icon({
      iconUrl: maison,
      iconSize: [38, 45], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
    });
    return (
      <div>
        <Map
          style={{ height: 500, objectFit: "cover" }}
          center={[this.props.center.lat, this.props.center.lon]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {this.props.hotel.map((position) => {
            return (
              <Marker
                icon={greenIcon}
                position={[position.location.lat, position.location.lon]}
              >
                <Popup>
                  <HotelMarker prix={position} />
                </Popup>
              </Marker>
            );
          })}
        </Map>
      </div>
    );
  }
}
export default HotelMap;
