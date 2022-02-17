import axios from 'axios';

export const { REACT_APP_API_URL } = process.env;

const $api = axios.create({
  baseURL: REACT_APP_API_URL
});

export default $api;