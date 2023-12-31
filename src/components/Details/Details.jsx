//Imports for react and redux
import React from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//MUI imports
import { Grid, Card, Container, Button, CardHeader } from "@material-ui/core";

export default function Details() {
    //Instanciated functions for use
    const id = useParams().id;
    const history = useHistory();
    const dispatch = useDispatch();
    //Use selector to get the move from the store
    const movie = useSelector((store) => store.oneMovie)
    //useEffect that runs on page load to get the movie details from the sagas and reducers
    useEffect(() => {
        dispatch({ type: 'FETCH_ONE_MOVIE', payload: id });
    }, []);

    //Component rendering with MUI components and data from the selector
    return (
        <Container >
            <br />
            {movie.map(movie => {
                return (
                    <Card variant="outlined" style={{ padding: 5, background: "#ffebcd" }} key={movie.id}>
                        <CardHeader title="Movie Details" />
                        <Grid container spacing={3}>
                            <Grid item xs={3} className="detail-poster">
                                <img src={movie.poster} />
                            </Grid>
                            <Grid item xs={8} className="details-description">
                                <p>{movie.description}</p>
                                <h4>Genres: {movie.string_agg}</h4>
                                <Button variant="contained" color="primary" onClick={() => history.push("/")}>Movie List</Button>
                            </Grid>
                        </Grid>
                        <br />
                    </Card>
                )
            })}
        </Container>
    )
}