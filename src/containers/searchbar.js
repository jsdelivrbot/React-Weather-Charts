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
      <form className="input-group">
      <input
        placeholder="Type in a City Name"
        className="form-control"
        value={this.state.term}
        onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
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
