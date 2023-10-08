import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import { Card } from '@material-ui/core';

function MovieList() {
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <Card variant='outlined'>
                            <h3>{movie.title}</h3>
                            <img onClick={()=> history.push(`/details/${movie.id}`)} src={movie.poster} alt={movie.title}/>
                            </Card>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;