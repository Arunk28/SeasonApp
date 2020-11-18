import React, { Component } from "react";
import ReactDOM from "react-dom";
import SeasonComponent from "./SeasonComponent";

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
      return <SeasonComponent lat={this.state.lat} />;
    }

    return <div>loading...</div>;
  }
}
//render the jsx
ReactDOM.render(<App />, document.querySelector("#root"));
