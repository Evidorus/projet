import React from 'react'
import "leaflet/dist/leaflet.css";

 class HotelMarker extends React.Component {
    render() {
        return (
            <div>
                {this.props.prix.price}€
            </div>
        )
    }
}
export default HotelMarker;
