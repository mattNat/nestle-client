import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
  render() {
    return (
      <form>
        {/* <Field
          name='Title'
          component={}
        /> */}
        Posts New
      </form>
    );
  }
}

// wire up like connect helper
export default reduxForm({
  // name of the form
  form: 'PostsNewForm'
})(PostsNew);