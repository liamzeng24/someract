import React from "react";
import ReactDOM from "react-dom";
import seasonDisplay from "./seasonDisplay";



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lat: null, errorMessage: ''};
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat : position.coords.latitude});
      },
      (err) => 
      {
        this.setState({errorMessage: err.message});
      }
    );
  }
  render(){
    if(this.state.lat == null && this.state.errorMessage == '')
    {
      return <div>Loading...</div>;
    }
    else if(this.state.lat != null)
    {
      return <div>Latitude: {this.state.lat}</div>;
    }
    return <div>Error: {this.state.errorMessage}</div> 
  }
};

ReactDOM.render(<App />, document.querySelector("#root"));
 