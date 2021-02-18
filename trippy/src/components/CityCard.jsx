import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    return (
      
      <Link to={`/hotel/${this.props.citySlug}`}>
        <img
          className="col-12"
          src={`http://localhost:3002${this.props.cityImage}`}
          alt={this.props.cityName}
        />
        <h3 className="text-center">{this.props.cityName}</h3>
      </Link>
    );
  }
}
export default CityCard;
