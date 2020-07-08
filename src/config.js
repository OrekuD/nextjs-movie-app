// the movie db v3
// 005d6a62314e432e6fe64e784f23f799

// v4
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDVkNmE2MjMxNGU0MzJlNmZlNjRlNzg0ZjIzZjc5OSIsInN1YiI6IjVmMDNkZjRlMTFjMDY2MDAzNmI2ZWI4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fJBzTh-QiVIeSlIdmjSswQYcokF6scxp6El6ycy_xaE

// image https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg

// https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg
// netflix

const response = {
  id: 556574,
  video: false,
  vote_count: 123,
  vote_average: 8.6,
  title: "Hamilton",
  release_date: "2020-07-03",
  original_language: "en",
  original_title: "Hamilton",
  genre_ids: [18, 36],
  backdrop_path: "/uWVkEo9PWHu9algZsiLPi6sRU64.jpg",
  adult: false,
  overview:
    "Presenting the tale of American founding father Alexander Hamilton, this filmed version of the original Broadway smash hit is the story of America then, told by America now.",
  poster_path: "/h1B7tW0t399VDjAcWJh8m87469b.jpg",
  popularity: 175.445,
  media_type: "movie",
};

const res = {
  id: 38700,
  video: false,
  vote_count: 4565,
  vote_average: 7.2,
  title: "Bad Boys for Life",
  release_date: "2020-01-15",
  original_language: "en",
  original_title: "Bad Boys for Life",
  genre_ids: [28, 80, 53],
  backdrop_path: "/upUy2QhMZEmtypPW3PdieKLAHxh.jpg",
  adult: false,
  overview:
    "Marcus and Mike are forced to confront new threats, career changes, and midlife crises as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
  poster_path: "/y95lQLnuNKdPAzw9F9Ab8kJ80c3.jpg",
  popularity: 45.654,
  media_type: "movie",
};

// search movie by id

// request

const fetch = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US`;

// response
const movie = {
  adult: false,
  backdrop_path: "/m11Mej9vbQqcXWgYrgPboCJ9NUh.jpg",
  belongs_to_collection: null,
  budget: 150000000,
  genres: [
    {
      id: 12,
      name: "Adventure",
    },
    {
      id: 18,
      name: "Drama",
    },
    {
      id: 10752,
      name: "War",
    },
  ],
  homepage: "http://www.masterandcommanderthefarsideoftheworld.com/",
  id: 8619,
  imdb_id: "tt0311113",
  original_language: "en",
  original_title: "Master and Commander: The Far Side of the World",
  overview:
    "After an abrupt and violent encounter with a French warship inflicts severe damage upon his ship, a captain of the British Royal Navy begins a chase over two oceans to capture or destroy the enemy, though he must weigh his commitment to duty and ferocious pursuit of glory against the safety of his devoted crew, including the ship's thoughtful surgeon, his best friend.",
  popularity: 238.448,
  poster_path: "/s1cVTQEZYn4nSjZLnFbzLP0j8y2.jpg",
  production_companies: [
    {
      id: 33,
      logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
      name: "Universal Pictures",
      origin_country: "US",
    },
    {
      id: 9118,
      logo_path: "/9o6KLcDBRw3fNItUflJVwj8dZpC.png",
      name: "Samuel Goldwyn Films",
      origin_country: "US",
    },
    {
      id: 25,
      logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
      name: "20th Century Fox",
      origin_country: "US",
    },
    {
      id: 14,
      logo_path: "/m6AHu84oZQxvq7n1rsvMNJIAsMu.png",
      name: "Miramax",
      origin_country: "US",
    },
  ],
  production_countries: [
    {
      iso_3166_1: "US",
      name: "United States of America",
    },
  ],
  release_date: "2003-11-14",
  revenue: 212011111,
  runtime: 138,
  spoken_languages: [
    {
      iso_639_1: "fr",
      name: "Français",
    },
    {
      iso_639_1: "pt",
      name: "Português",
    },
    {
      iso_639_1: "en",
      name: "English",
    },
  ],
  status: "Released",
  tagline: "The courage to do the impossible lies in the hearts of men.",
  title: "Master and Commander: The Far Side of the World",
  video: false,
  vote_average: 7.1,
  vote_count: 1838,
};

// search by keyword

// request https://api.themoviedb.org/3/search/movie?api_key=005d6a62314e432e6fe64e784f23f799&language=en-US&query=avengers&page=1&include_adult=false

// response

// array of objects
const r = {
  popularity: 2.1,
  vote_count: 15,
  video: true,
  poster_path: "/2RDUQpzhJHVzObkL4ZxwJkbKYSz.jpg",
  id: 448366,
  adult: false,
  backdrop_path: null,
  original_language: "en",
  original_title: "Building the Dream: Assembling the Avengers",
  genre_ids: [99],
  title: "Building the Dream: Assembling the Avengers",
  vote_average: 8.6,
  overview:
    "This 90-minute feature will show how the films Iron Man, The Incredible Hulk, Iron Man 2, Thor, and Captain America: The First Avenger were conceived and led to the greatest super hero team ever assembled on screen The Avengers.",
  release_date: "2012-09-25",
};

// search by genreIds

//request
const re = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.MOVIE_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=2017-01-01&primary_release_date.lte=2020-12-31&vote_average.gte=6&with_genres=${id}`;
