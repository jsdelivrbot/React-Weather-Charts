import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

  render() {
    console.log(this.props.weather);
    return(
      <table className="table is-striped">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;C)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const id = cityData.city.id;
    const temps = cityData.list.map(weather => weather.main.temp);
    const pressure = cityData.list.map(weather => weather.main.pressure);
    const humidities = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={id}>
        <td>{name}</td>
        <td><Chart data={temps} unit="&deg;C" color="red" /></td>
        <td><Chart data={pressure} unit="hPa" color="green" /></td>
        <td><Chart data={humidities} unit="%" color="purple" /></td>
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
