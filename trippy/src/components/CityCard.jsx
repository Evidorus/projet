import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class CityCard extends React.Component {
  render() {
    let source = "http://via.placeholder.com/300x200";
    if (this.props.image !== "") {
      source = this.props.image;
    }
    return (
      <>
        {this.props.cityName == "Paris" ? (
          <>
            <Link to={`/hotel/${this.props.slug}`}>
              <img src={source} alt="" className="cityImg" />
              <p className="titreVille">{this.props.cityName}</p>
            </Link>
          </>
        ) : (
          <>
            <div className="col-6 autresVilles">
              <Link to={`/hotel/${this.props.city.slug}`}>
                <img src={source} alt="..." className="cityImg2 " />
                <p className="titreVille">{this.props.cityName}</p>
              </Link>
            </div>
          </>
        )}
      </>
    );
  }
}
export default CityCard;
