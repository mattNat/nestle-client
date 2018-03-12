import axios from 'axios';

const ROOT_URL = `http://localhost:8080`;

export const FETCH_POSTS = 'FETCH_POSTS';

export function fetchPosts() {
  // const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  const request = axios.get(`${ROOT_URL}/notes`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}