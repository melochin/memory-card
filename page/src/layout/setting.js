import axios from 'axios';

axios.defaults.headers["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers["Access-Control-Allow-Headers"] = "X-Requested-With,Content-Type";
axios.defaults.headers["Access-Control-Allow-Methods"] = "PUT,POST,GET,DELETE,OPTIONS";
axios.defaults.baseURL = "http://localhost:8080";

export {axios}
