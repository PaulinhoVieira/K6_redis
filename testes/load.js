import http from 'k6/http';

export const options = {
	stages: [
    		{ duration: '5s', target: 100 }, // ramp-up
    		{ duration: '20s', target: 100 }, // stable
    		{ duration: '5s', target: 0 }, // ramp-down 
  	],
};

export default () => {
  http.get('http://wordpress/?p=5');
};