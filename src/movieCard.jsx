import React from "react";

const MovieCard =({movie}) =>{
    return(
        <div className="movie">

            <div>
                <p>{movie.Year}</p>
            </div>

            <div>
                <img src={movie.Poster !== 'NA' ? movie.Poster : 'http://via.placeholder.com/640x360'} alt={movie.Title} />
            </div>

            <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div>

        </div>
    )
}

export default MovieCard;