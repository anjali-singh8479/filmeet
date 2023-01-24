import React from "react";
import "../styles/row.css";
import axios from "../axios";
import { useEffect, useState } from "react";
import { AiFillHeart } from "react-icons/ai";
import { MdMovie } from "react-icons/md";

export const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setmovies] = useState([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  localStorage.setItem("movies", JSON.stringify(movies));

  return (
    <div className="rows">
      <div style={{ display: "flex", alignItems: "center", padding: "5px" }}>
        <MdMovie style={{ color: "#EE1981" }} />
        <h2 className="title">{title}</h2>
      </div>
      
      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <>
                <div className="row">
                  <img
                    
                    key={movie.id}
                    src={`${base_url}${
                      isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                  />
                  <div className="  row-info">
                    <p> {movie.name}{movie.title}</p>
                    <AiFillHeart />
                  </div>
                </div>
              </>
            )
        )}
        <AiFillHeart />
      </div>
    </div>
  );
};

export default Row;
