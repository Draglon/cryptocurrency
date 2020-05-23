/* eslint-disable no-unused-vars */
import axios from 'axios';
import qs from 'qs';

const instance = axios.create({
  baseURL: 'https://open.exchangerate-api.com/v6/',
});

export default instance;
