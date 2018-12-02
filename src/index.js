import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonsDisplay';

class App extends React.Component {
 
  state = {  lat: null, errorMessage: '' };

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate(){
  }

  render(){
    if (this.state.errorMessage && !this.state.lat) {
      return(
        <div>Error: {this.state.errorMessage}</div>
      );
    }
    if (this.state.lat && !this.state.errorMessage) {
      return(
        <SeasonDisplay lat={this.state.lat}/>
      );
    }
    if(!this.state.errorMessage && !this.state.lat) {
      return(
        <div> Loading</div>
      );
    }
  }
}

ReactDOM.render(<App/>, document.getElementById('root'));