import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <section className="section">
          <div className="container">
            <SearchBar />
          </div>
        </section>
        <section className="section">
          <div className="container">
            <WeatherList />
          </div>
        </section>
      </div>
    );
  }
}
