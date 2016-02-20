import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import classNames from 'classnames';

import { fetchWeather } from '../actions/index';

class SearchBar extends Component {

  constructor(props){
    super(props);

    this.state = {
      term: '',
      loading: false
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  render () {
    var buttonClass = classNames({
      'button is-info is-medium': true,
      'is-loading': this.state.loading
    });
    var inputClass = classNames({
      'input is-medium': true,
      'is-disabled': this.state.loading
    });
    return(
      <form onSubmit={this.onFormSubmit} className="control is-grouped">
      <input
        className={inputClass}
        disabled={this.state.loading}
        placeholder="Type in a City Name"
        value={this.state.term}
        ref={(c) => this._input = c}
        onChange={this.onInputChange} />
      <button type="submit" className={buttonClass}>Submit</button>
      </form>
    );
  }

  componentDidMount () {
    console.log(this);
    this._input.focus();
  }

  onInputChange(e){
    this.setState({
      term: e.target.value
    });
  }

  onFormSubmit(e){
    if(e){
      e.preventDefault();
    }

    // We need to fetch weather data
    this.props.fetchWeather(this.state.term);
    this.setState({ loading: true });
    setTimeout(()=> {
      this.setState({ term: '', loading: false});
      this._input.focus();

    }, 1500);

  }

}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
