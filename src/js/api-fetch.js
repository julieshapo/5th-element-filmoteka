import axios from 'axios';

const API_KEY = '169863a84bc27c731fc45c45dd4a4a7e';

//Запит фільму за ключовим словом:
export async function getMoviesByName(name, page) {
  try {
    const params = {
      api_key: API_KEY,
      query: name,
      page,
      language: 'en-US',
    };
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Запит на список найпопулярніших фільмів
export async function getMoviesTrending(page = 1) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?page=${page}`,
      // `https://api.themoviedb.org/3/trending/all/week?page=${page}`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Запит повної інформації про кінофільм
export async function getMovieFullInfo(movie_id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
    };
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}?`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

//Запит трейлеру фільма
async function getMovieTrailer(movie_id) {
  try {
    const params = {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    };
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?`,
      { params }
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
// const MAIN_URL = 'https://api.themoviedb.org/3';

// export async function getTrending(page = 1) {
//   const url = `${MAIN_URL}/trending/all/day?api_key=${API_KEY}&language=en-US&page=${page}`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => console.log(error));
// }

// export async function getByKeyword(query, page) {
//   const url = `${MAIN_URL}/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=${page}`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => console.log(error));
// }

// export async function getInfoMovie(movie_id) {
//   const url = `${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data;
//     })
//     .catch(error => {});
// }

// export async function getVideos(movie_id) {
//   const url = `${MAIN_URL}/movie/${movie_id}/videos?api_key=${API_KEY}&language=en-US`;
//   return await axios
//     .get(url)
//     .then(response => {
//       return response.data.results;
//     })
//     .catch(error => {});
// }

// export async function getArrayofMovies(array) {
//   const arrayOfMovies = array.map(async movie_id => {
//     return await axios
//       .get(`${MAIN_URL}/movie/${movie_id}?api_key=${API_KEY}&language=en-US`)
//       .then(response => {
//         return response.data;
//       })
//       .catch(error => console.log(error));
//   });

//   const resultData = await Promise.all(arrayOfMovies);
//   return resultData;
// }
