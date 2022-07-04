import React from "react";
import { NavLink } from "react-router-dom";

import { useGlobalContext } from "./context";

export const Movies = () => {
  const { movie, isLoading } = useGlobalContext();
  //console.log(movie);

  if (isLoading) {
    return (
      <section className="movie-section ">
        <div className="">Loading....</div>;
      </section>
    );
  }
  return (
    <>
      <section className="movie-page">
        <div className=" container grid grid-4-col">
          {movie
            ? movie.map((curMovie) => {
                const { Title, imdbID, Poster } = curMovie;
                const movieTitle = Title.substring(0, 15);
                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {movieTitle.length >= 15
                            ? `${movieTitle}...`
                            : movieTitle}
                        </h2>
                        <img src={Poster} alt={imdbID} />
                        {/* <div className="add-button">
                          <button onClick={() => alert("hello")}>
                            Add To Favourities
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movies;
