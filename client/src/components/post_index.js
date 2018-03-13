import React, { Component } from 'react';
import { connect } from 'react-redux';
// clearly identical to anchor tag
import { Link } from 'react-router-dom';
import { fetchPosts, fetchTrails } from '../actions';
import _ from 'lodash';

// when are we going to call reaction creator
// react lifecycle method
class PostsIndex extends Component {
  // one time loading procedure
  // ideal for data loading
  componentDidMount() {
    // action creator, will concole.log twice
    this.props.fetchPosts();
    this.props.fetchTrails();
  }

  renderPosts() {
    // const test = this.props.trails[0];
    // if (!this.props.trails[0]) {
    //   <div>loading...</div>
    // } else {
    //   const test= 
    // }
    const myTrails = this.props.trails[0] || {};
    console.log(myTrails.trails);
    // console.log(this.props.posts);
    
    return _.map(myTrails.trails, trail => {
      return (
        <li className='list-group-item' key={trail.id.toString()} >
          Name: {trail.name} <br/>
          Length (round-trip): {trail.length} <br/>
          <img src= {trail.imgSqSmall}  alt={trail.name} />
        </li>
      );
    });
  }
  

  render() {
    // will console log twice
    // console.log(this.props.posts);
    return (
      <div>
        <div className='text-xs-right'>
          <Link className='btn btn-primary' to='/posts/new'>
            Add a Post
          </Link>
        </div>
        <h3>Post</h3>
        <ul className='list-group'>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

// lists of post get inside component
function mapsStateToProps(state) {
  return { 
    posts: state.posts,
    trails: state.trails 
  };
}


// null - we are not passing mapsStateToProps
// fetchPosts is identical to mapDispatchToProps
// still have access to this.props.fetch.posts
export default connect(mapsStateToProps, { fetchPosts, fetchTrails })(PostsIndex);