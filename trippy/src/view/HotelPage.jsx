import React from "react";
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

  render() {
    return (
      <>
        <h1>{this.state.hotel.name}</h1>
      </>
    );
  }
}

export default HotelPage;
