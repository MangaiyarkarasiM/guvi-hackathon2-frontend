import React from 'react';
import Movie from '../Movies/Movie'

function MovieList(props) {
    return (
        <div>
            { 
              props.movies.map((movie,index)=>{
                  return <Movie key={index} movie={movie}/>
              })
            }
        </div>
    );
}

export default MovieList;