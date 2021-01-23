import axios from 'axios';
export default class ApiServicesClass {
  constructor() {
    axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
    this.apiKey = 'fd51fa9fd25cd03dffbbc9017d15eda1';
  }
  fetchTrending() {
    return axios
      .get(`/trending/movie/day?api_key=${this.apiKey}`)
      .then(response => response.data.results)
      .catch(error => error);
  }
  fetchMovies(query, page) {
    return axios
      .get(`/search/movie?api_key=${this.apiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`)
      .then(response => response.data)
      .catch(error => error);
  }
  fetchMovieById(id) {
    return axios
      .get(`/movie/${id}?api_key=${this.apiKey}&language=en-US`)
      .then(response => response.data)
      .catch(error => error);
  }
  fetchMovieCastById(id) {
    return axios
      .get(`movie/${id}/credits?api_key=${this.apiKey}&language=en-US`)
      .then(response => response.data)
      .catch(error => error);
  }
  fetchMovieReviewsById(id) {
    return axios
      .get(`movie/${id}/reviews?api_key=${this.apiKey}&language=en-US&page=1`)
      .then(response => response.data)
      .catch(error => error);
  }
}
// 618353
