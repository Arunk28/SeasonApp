import React, { Component } from "react";
import ReactDOM from "react-dom";

//class component excersise
class App extends React.Component {
  state = { lat: null, error: "" };

  //lifecycle method component did mount
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ error: err.message }),
    );
  }
  render() {
    if (!this.state.lat && this.state.error) {
      return <div>Error : {this.state.error}</div>;
    }
    if (this.state.lat && !this.state.error) {
      return <div>latitude : {this.state.lat}</div>;
    }

    return <div>loading...</div>;
  }
}
//render the jsx
ReactDOM.render(<App />, document.querySelector("#root"));
