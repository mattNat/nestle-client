import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTrails } from '../actions/index';

/*
set controlled state
*/
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lat: '',
      lon: ''
    };

    // this (which is an instance of search bar)
    this.onInputChangeLat = this.onInputChangeLat.bind(this);
    this.onInputChangeLon = this.onInputChangeLon.bind(this);    
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // event object is vanilla js thing
  // this?  whenever we hand callback function
  onInputChangeLat(event) {
    // this.setState (I don't have it)
    this.setState({lat: event.target.value});
  }

  onInputChangeLon(event) {
    // this.setState (I don't have it)
    this.setState({lon: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchTrails(this.state.lat, this.state.lon);
    // clear search input, will pass it to value in input
    this.setState({ lat: '', lon: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          placeholder='Latitude'
          className='form-control'
          value={this.state.lat}
          onChange={this.onInputChangeLat}
        />
        <input 
          placeholder='Longitude'
          className='form-control'
          value={this.state.lon}
          onChange={this.onInputChangeLon}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTrails }, dispatch);
}

// pass null, redux does not need state here
// gives access to this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);