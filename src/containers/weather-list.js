import React, { Component } from 'react';
import { connect } from 'react-redux';

class WeatherList extends Component {

  render() {
    console.log(this.props.weather);
    return(
      <table className="table is-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    return (
      <tr key={cityData.city.id}>
        <td>{cityData.city.name}</td>
      </tr>
    );
  }

}

function mapStateToProps(state){
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherList);
