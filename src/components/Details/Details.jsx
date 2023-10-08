import React from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

export default function Details() {
    const id = useParams().id;
    const history = useHistory();
    const dispatch = useDispatch();
    const movie = useSelector((store) => store.oneMovie)

    useEffect(() => {
        dispatch({ type: 'FETCH_ONE_MOVIE', payload: id });
    }, []);

    return (
        <div>
            {movie.map(movie => {
                return (
                    <div>
                        <h1>Details</h1>
                        <div className="detail-poster">
                        <img src={movie.poster} />
                        </div>
                        <div className="details-description">
                        <p>{movie.description}</p>
                        </div>
                        <div className="details-genres">
                            <h2>Genres: {movie.string_agg}</h2>
                        </div>
                        <div className="goBackBtn">
                            <button onClick={() => history.push("/")}>Movie List</button>
                        </div>
                    </div>

                )
            })}
        </div>
    )
}