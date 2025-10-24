import React, { useEffect } from 'react';

function Movie(){

    const [page, setPage] = React.useState(1);

    const [loading, setLoading] = React.useState(false);
    
    const [movieList, setMovieList] = React.useState([]);
    
    const getMovie = () => { 
        setLoading(true);
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&page=${page}`)
        .then (res => res.json())
        .then (json => {
            setMovieList(json.results);
            setLoading (false);
        })
        .catch(() => setLoading(false));
    }
    


    useEffect(() => {
        getMovie();
    }, [page]);

    return (
        <div>
            <center><h2>Lista de Filmes</h2></center>
            {movieList.map((movie)=>(
                <img style={{width: '180', height: '270px', marginLeft: '15px'}} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            ))}

        <div>
            <button onClick={() => setPage(page > 1 ? page - 1 : 1)}>Anterior</button>
            <span style={{ margin: '20px' }}>Página {page}</span>
            <button onClick={() => setPage(page + 1)}>Próximo</button>
        </div>

        </div>

    )
}

export default Movie;