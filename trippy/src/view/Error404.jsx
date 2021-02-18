import React from "react";
import "../App.css";

class Error404 extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center m-5">Cette page n'existe pas.</h1>
        <div className="d-flex justify-content-center">
          <img src="/7iJR.gif" alt="error 404" />
        </div>
      </div>
    );
  }
}

export default Error404;
