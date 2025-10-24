import React, { useEffect } from 'react';

function Movie(){
    
    const [movieList, setMovieList] = React.useState([]);
    
    const getMovie = () => { 
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}`)
        .then (res => res.json())
        .then (json => setMovieList(json.results))
    }


    useEffect(() => {
        getMovie();
    }, []);

    console.log(movieList);

    return (
        <div>
            {movieList.map((movie)=>(
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            ))}
        </div>
    )
}

export default Movie;