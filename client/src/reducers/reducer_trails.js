import _ from 'lodash';
import { FETCH_TRAILS } from '../actions';

export default function(state={}, action) {
  switch (action.type) {
  case FETCH_TRAILS:
    console.log(action.payload.data); // [ post1, post2 ]
    // { 4: post }
    // console.log(_.mapKeys(action.payload.data, 'id')); // [ post1, post2 ]
    
    return _.mapKeys(action.payload.data, 'id');    
  default:
    return state;
  }
}