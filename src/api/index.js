import axios from 'axios';

const instance = axios.create({
  // VUE_APP 을 붙이면 definePlugin 사용할 필요없이 .env 파일의 값이 불려짐
  baseURL: process.env.VUE_APP_API_URL,
});

function registerUser(userData) {
  // const url = 'http://localhost:3000/signup';
  // return axios.post(url, userData);
  return instance.post('signup', userData);
}

function loginUser(userData) {
  return instance.post('login', userData);
}

export { registerUser, loginUser };
