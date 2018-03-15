import axios from 'axios';

// local database
const ROOT_URL = `http://localhost:3005`;

// hiking trail api
const API_KEY = '&key=200228532-bc7667c06009a2e233ef5527dbb3a053';
// const API_ROOT_URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10';
const API_ROOT_URL = 'https://www.hikingproject.com/data/get-trails?';
//lat=40.0274&lon=-105.2519&maxDistance=10';


export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_TRAILS = 'FETCH_TRAILS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_TRAIL = 'FETCH_TRAIL';


export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/notes`);

  // posting add fields that didn't exist
  // posting use different way than axios
  // use nodejs for posting
  

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchTrails(lat, lon) {
  // const lat = '40.0274';
  // const lon = '-105.2519';
  // const lat = '37.8651';
  // const lon = '-119.5383';
  const url = `${API_ROOT_URL}lat=${lat}&lon=${lon}&maxDistance=10${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_TRAILS,
    payload: request
  }
}

// hook up to posts_new.js
export function createPost(values, callback) {
  const request = axios.post(`${ROOT_URL}/notes`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchTrail(id) {
  const BASE_URL = 'https://www.hikingproject.com/data/get-trails-by-id?ids=';  
  const url = `${BASE_URL}${id}${API_KEY}`;
  const request = axios.get(url);
  return {
    type: FETCH_TRAIL,
    payload: request
  }
}