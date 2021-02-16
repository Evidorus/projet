import React from 'react'
import "./HotelCard.css"

 class HotelCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            image: "images[O]"
        }
    }

    componentDidMount(){

    }

    render() {
        return (
            <div>
                {this.props.hotel.pictures
                .slice(0,1)
                .map((img) => {
                    return( <img className="HotelCardImg" src={img} ></img>)
                })}
                <h2>{this.props.hotel.name}</h2>
                <h2>{this.props.hotel.price} €</h2>

            </div>
        )
    }
}
export default HotelCard;
