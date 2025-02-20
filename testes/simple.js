import http from 'k6/http';

export default () => {
  http.get('http://wordpress/?p=5');
};