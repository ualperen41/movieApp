import axios from 'axios';
const apiKey = process.env.EXPO_PUBLIC_MOVIE_API_KEY;
const apiBaseUrl = 'https://api.themoviedb.org/3';

const trendingMoviesEndpoint = `${apiBaseUrl}/trending/movie/day?api_key=${apiKey}`;
const upcomingMoviesEndpoint = `${apiBaseUrl}/movie/upcoming?api_key=${apiKey}`;
const topRatedMoviesEndpoint = `${apiBaseUrl}/movie/top_rated?api_key=${apiKey}`; // Eksik olanı ekledim

//dynmaic endpoint
export const movieDetailsEndpoint = id => `${apiBaseUrl}/movie/${id}?api_key=${apiKey}`;
export const movieCreditsEndpoint = id => `${apiBaseUrl}/movie/${id}/credits?api_key=${apiKey}`;
export const similarMoviesEndpoint = id => `${apiBaseUrl}/movie/${id}/similar?api_key=${apiKey}`;
export const personDetailsEndpoint = id => `${apiBaseUrl}/person/${id}?api_key=${apiKey}`;
export const personMoviesEndpoint = id => `${apiBaseUrl}/person/${id}/movie_credits?api_key=${apiKey}`;
export const searchMoviesEndpoint = `${apiBaseUrl}/search/movie`;
export const image500 = path => `https://image.tmdb.org/t/p/w500/${path}`
export const image342 = path => `https://image.tmdb.org/t/p/w342/${path}`
export const image185 = path => `https://image.tmdb.org/t/p/w185/${path}`
// Axios ile API İstek Fonksiyonu
const apiCall = async (endpoint, params) => {
    const options = { method: 'GET', url: endpoint, params: params ? params : {} };
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.log('Hata: ', error);
        return {};
    }
}


// Dışarıya açılan istek fonksiyonları
export const fetchTrendingMovies = () => apiCall(trendingMoviesEndpoint);
export const fetchUpcomingMovies = () => apiCall(upcomingMoviesEndpoint);
export const fetchTopRatedMovies = () => apiCall(topRatedMoviesEndpoint);
export const fetchMovieDetails = (id) => apiCall(movieDetailsEndpoint(id));
export const fetchMovieCredits = (id) => apiCall(movieCreditsEndpoint(id));
export const fetchSimilarMovies = (id) => apiCall(similarMoviesEndpoint(id));
export const fetchPersonDetails = (id) => apiCall(personDetailsEndpoint(id));
export const fetchPersonMovies = (id) => apiCall(personMoviesEndpoint(id));
// `apiKey` değişkenini parametrelerin içine gömüyoruz
export const searchMovies = (params) => apiCall(searchMoviesEndpoint, { api_key: apiKey, ...params });
export const moviesData = [
  {
    id: 2,
    title: 'Ant-Man and the Wasp: Quantumania',

    backgroundPoster:
      'https://image.tmdb.org/t/p/w500/9Hk9qdCyce04VXNQuDXAK1d138E.jpg',

    image:
      'https://image.tmdb.org/t/p/w500/qnQbB22YJ7dSs4o6M7eXTpNxPz.jpg',

    description:
      "Super-Hero partners Scott Lang and Hope van Dyne, along with ...",

    releaseDate: '1991-01-18',
    releaseYear: '2020',
    runTime: '170',
  },
];

export const personData = {
  name: 'Keanu Reeves',
  birthPlace: 'Beirut, Lebanon',
  birthday: '1964-09-02',
  gender: 'Male',
  knownFor: 'acting',
  popularity: '74.34',
  biography:
    'Keanu Charles Reeves is a Canadian actor. Reeves is known for his roles in ...',
};

