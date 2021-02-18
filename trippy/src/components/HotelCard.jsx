import React from "react";
import "./HotelCard.css";
import Ratings from "react-ratings-declarative";
import { Link } from "react-router-dom"

class HotelCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "http://via.placeholder.com/300x200",
    };
  }

  componentDidMount() { }

  render() {

    return (
      <div className="card ">

        <Link to={`/hotelPage/${this.props.hotel._id}`} className="col-4">
          {this.props.hotel.pictures
            .slice(0, 1)
            .map((img) => {
              return (

                <img
                  className="HotelCardImg"
                  src={img}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = this.state.image;
                  }}
                />


              );
            })}

            <p className="text-dark">{this.props.hotel.name}</p>
            <p className="text-dark">{this.props.hotel.price} €</p>
            <div className="rating-stars">

            {this.props.hotel.stars !== null ? (
              <Ratings
                rating={this.props.hotel.stars}
                widgetRatedColors="orange"
              // changeRating={this.props.hotel.stars}
              >
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
                <Ratings.Widget />
              </Ratings  >
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
          </div>

        </Link>
      </div>
    );
  }
}
export default HotelCard;

