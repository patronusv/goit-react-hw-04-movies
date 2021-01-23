import axios from 'axios';
export default class ApiServicesClass {
  constructor() {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    this.apiKey = 'fd51fa9fd25cd03dffbbc9017d15eda1';
  }
  getTrending() {
    return axios
      .get(`/trending/all/day?api_key=${this.apiKey}`)
      .then(response => response.data.results)
      .catch(error => error);
  }
  getMovies(query) {
    return axios
      .get(`/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=1&include_adult=false`)
      .then(response => response.data)
      .catch(error => error);
  }
  getMovieById(id) {
    return axios
      .get(`/movie/${id}?api_key=${this.apiKey}&language=en-US`)
      .then(response => response.data)
      .catch(error => error);
  }
  getMovieCastById(id) {
    return axios
      .get(`movie/${id}/credits?api_key=${this.apiKey}&language=en-US`)
      .then(response => response.data)
      .catch(error => error);
  }
  getMovieReviewsById(id) {
    return axios
      .get(`movie/${id}/reviews?api_key=${this.apiKey}&language=en-US&page=1`)
      .then(response => response.data)
      .catch(error => error);
  }
}
// 618353
