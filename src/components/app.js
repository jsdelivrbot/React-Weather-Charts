import React from 'react';
import { Component } from 'react';

import SearchBar from '../containers/searchbar';
import WeatherList from '../containers/weather-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <section className="hero is-info is-medium">
          <div className="hero-content">
            <div className="container">
              <SearchBar />
            </div>
          </div>
        </section>

        <WeatherList />

      </div>
    );
  }
}
