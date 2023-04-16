import axios from "axios";
//  base url to make requests to the movie database

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3"
});

// instance.get('/trending');
// https://api.themoviedb.org/3/trending, it will look like this

export default instance;