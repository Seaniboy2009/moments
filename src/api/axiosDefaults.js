import axios from "axios";

axios.defaults.baseURL = 'https://rest-clark-api.herokuapp.com/';
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data';
axios.defaults.withCredentials = true;