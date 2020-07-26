import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://my-json-server.typicode.com/imcvakt/fake-api/'
  // baseURL: 'https://api.jsonbin.io/b/5f1cc9a9918061662848f0be/',
  // headers: {
  //   secret: '$2b$10$DMwTrGpCfLlgwKold7XOseXJS/dXXJY2cORaBhTe8x.tUZqk47x16'
  // }
});
