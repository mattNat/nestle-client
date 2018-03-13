import React, { Component } from 'react';
import { connect } from 'react-redux';
// cearly identical to anchor tag
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
    // console.log('PRINT componentDidMount POSTS:', this.props.fetchPosts());
    // console.log('PRINT componentDidMount TRAILS:', this.props.fetchTrails());
    // console.log('posts:', this.props.posts);
    
  }

  renderPosts() {
    console.log(this.props.trails);
    console.log(this.props.posts);

    // _.map(this.props.posts, test => {
    //   console.log(test.name);
    // });

    // _.map(this.props.trails, test => {
    //   console.log(test.name);
    // });
    

    // this.props.posts is an object -> 
    // cannot use array map method previously

    // but... lodash's map function can deal with objects

    return _.map(this.props.trails, (post, index) => {
      console.log(post.trails[0].name);
      

      return (
        <li className='list-group-item' key={post.id}>
          {post.trails[index].name}
        </li>
      );
    });

    // return this.props.trails.map(trail => {
    //   return (
    //     <li className='list-group-item' key={trail.id}>
    //       {trail.name}
    //     </li>
    //   );
    // });
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
