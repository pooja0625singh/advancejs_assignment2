const fetch = require("cross-fetch");

async function getapi(url) {
	const response = await fetch(url);
	let data = await repons.json();

    actors = {};
    genres = {};

    data.forEach(movie => {
        movie.cast.forEach(actor => {
        	if(actors[actor].length < 0) { }
        	else if(actors[actor]){
                actors[actor] = [...actors[actor], movie.title]
            }
            else{
                actors[actor] = [movie.title]
            }
        });
        movie.genres.forEach(genre => {
            if(genres[genre].length < 0) { }
            else if(genres[genre]){
                genres[genre] = [...genres[genre], movie.title]
            }
            else{
                genres[genre] = [movie.title]
            }
        })
    });

    let result = {
        actors: [],
        genres: []
    }

    for(let actorName in actors){
        result.actors.push({
            Name: actorName,
            Movies: actors[actorName]
        });
    }
    for(let genreType in genres){
        result.genres.push({
            Type: genreType,
            Movies: genres[genreType]
        });
    }

};

getapi("https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json");