"use strict";

var request = require("request-promise-native");
const movieApiKey =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkOTRkZGQxMTE1NTYzYTUxMTc3NmU4MjY4OGIzN2JjMyIsInN1YiI6IjY0ODg0Y2NiNmY4ZDk1MDExZjIzNzQ0MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._j0EeKlTKueFcv135Ph26Bg0cL21HozyAxVrCb2At1I";
const options = {
  url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${movieApiKey}`,
  },
};

module.exports = {
  getAllMovies: function () {
    return request.get(options);
  },
  getMovieDetails: function (movieId) {
    const options = {
      url: `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,

      headers: {
        accept: "application/json",
        Authorization: `Bearer ${movieApiKey}`,
      },
    };
    return request.get(options);
  },
  getMovieVideos: function (movieId) {
    const options = {
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${movieApiKey}`,
      },
    };
    return request(options);
  },
};
