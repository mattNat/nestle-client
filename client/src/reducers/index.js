import { combineReducers } from 'redux';
import { reducer as formReducer} from 'redux-form';
import PostsReducer from './reducer_posts';
import TrailsReducer from './reducer_trails';

const rootReducer = combineReducers({
  posts: PostsReducer,
  trails: TrailsReducer,
  // {..., Date: null, User: name}
  // view state
  form: formReducer
});

export default rootReducer;
