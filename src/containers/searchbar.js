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
      <form className="control is-grouped">
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

    console.log(e.target.value);

    this.setState({
      term: e.target.value
    });

  }

}

export default SearchBar;
