import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      term: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
  }

  render () {
    return(
      <form onSubmit={this.onFormSubmit} className="control is-grouped">
      <input
        className="input is-medium"
        placeholder="Type in a City Name"
        value={this.state.term}
        onChange={this.onInputChange} />
        <button type="submit" className="button is-info is-medium">Submit</button>
      </form>
    );
  }

  onInputChange(e){
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit(e){
    e.preventDefault();

    // We need to fetch weather data

  }

}

export default SearchBar;
