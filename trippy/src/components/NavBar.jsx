import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
 
  render() {
  
    return (
      <div >
        <nav class="navbar navbar-expand-lg  navbar-light bg-success">
          <a class="navbar-brand text-white" href="#">
          Trippy
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li class="nav-item active ">
                <Link class="nav-link text-white " to="/home">
                Home <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/hotel">
                Hotel
                </Link>
              </li>
              <li class="nav-item ">
                <Link class="nav-link text-white" to="/hotelPage">
                HotelPage
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default NavBar;
