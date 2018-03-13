import axios from 'axios';

// local database
const ROOT_URL = `http://localhost:8080`;

// hiking trail api
const API_KEY = '&key=200228532-bc7667c06009a2e233ef5527dbb3a053';
const API_ROOT_URL = 'https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10';

export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_TRAILS = 'FETCH_TRAILS';

export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/notes`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function fetchTrails() {
  const request = axios.get(`${API_ROOT_URL}${API_KEY}`);
  return {
    type: FETCH_TRAILS,
    payload: request
  }
}

// create a more sophis object
