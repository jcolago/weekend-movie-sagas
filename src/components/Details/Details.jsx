import React from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Grid, Card, Container, Button, CardHeader } from "@material-ui/core";

export default function Details() {
    const id = useParams().id;
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector((store) => store.oneMovie)

    useEffect(() => {
        dispatch({ type: 'FETCH_ONE_MOVIE', payload: id });
    }, []);

    return (
        <Container>
            <br />
            {movie.map(movie => {
                return (
                    <Card variant="outlined" xs={{ padding: 5}} key={movie.id}>
                        <CardHeader title="Details" />
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