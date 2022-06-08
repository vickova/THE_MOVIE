
const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'cabe13f462c2ab3075bed9c977e9fd00';
const image_base_url= 'https://image.tmdb.org/t/p/w1280';

const data = {
	datalist: []
}
const getTrendingMovies = async (page=1) => {
	const response = await fetch(`${BASE_URL}movie/popular?api_key=${API_KEY}&page=${page}`)
	const responseData = await response.json()
	const resp = responseData.results
	return resp;
}

const getMovies = async () => {
	const movies =await getTrendingMovies();
	const result = movies.map((res) => res)
	data.datalist = movies;
	console.log(data.datalist)
	return data.datalist
}
const preImage = 'https://image.tmdb.org/t/p/w500'

const listMovies = async () => {
	const listMovie =await getMovies();
	const movieDiv = document.querySelector('.movie-cover');
	movieDiv.innerHTML = listMovie.map((lstmovie) => {	
	return`<div class="movie-card">
 			<img src="${preImage}${lstmovie.poster_path}"/>
 			<div class="movie-text">
	 			<h3>${lstmovie.original_title}</h3>
	 			<p>Released: ${lstmovie.release_date}</p>
				 <div class="youtube">
	 			<a id="movie-link" href="moviedetails.html"><button>Read More</button></a>
				 <a href="https://youtube.com"><button ><img src="images/youtube.svg" alt="youtube-icon"></button></a>
				 </div>
 			</div>
 		</div>`
	}).join("")
}
listMovies();
