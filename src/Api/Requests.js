const API_KEY = "38d0409f65543e3dd6d22adbccdefa20"
const requests = {
fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests;


