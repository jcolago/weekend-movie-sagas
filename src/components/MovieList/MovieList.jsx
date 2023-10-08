import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import {
    Card,
    CardActionArea,
    Tooltip,
    CardContent,
    CardHeader,
    Grid
} from '@material-ui/core';

function MovieList() {
    const history = useHistory();

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>Movie List</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <Grid item xs={3} key={movie.id} >
                            <Card variant='outlined' style={{ margin: "5px", maxHeight: "550px" }}>
                                <CardHeader title={movie.title} />
                                <CardContent>
                                    <Tooltip title="Click for Details">
                                        <CardActionArea>
                                            <img onClick={() => history.push(`/details/${movie.id}`)} src={movie.poster} alt={movie.title} />
                                        </CardActionArea>
                                    </Tooltip>
                                </CardContent>
                            </Card>
                        </Grid>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;