import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
 
  render() {
  
    return (
      <div >
        <nav className="navbar navbar-expand-lg  navbar-dark bg-success">
          <a className="navbar-brand font-weight-bold" href="#">
          <i className="fas fa-umbrella-beach "></i>
          Trippy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ">
              <li className="nav-item active font-weight-bold ">
                <Link className="nav-link" to="/home">
                Hotels <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                Restaurants
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="#">
                Login
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="#">
                Signup
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
