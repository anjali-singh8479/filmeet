import React from 'react'
import "../styles/banner.css"
import axios from "../../src/axios";
import  { useEffect, useState } from 'react'
import {AiFillHeart} from "react-icons/ai"
import requests from "../components/requests.js";

const Banner = () => {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchComedyMovies);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
                ]
            );
        }
        fetchData();
    }, [])

    console.log(movie);

    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;
    }

    return (
        <>
            <header className='banner' style={{
                backgroundSize: "cover",
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: "center center",
            }}>

                <div className='banner_contents'>
                    <h1 className='banner_title'>
                        {movie?.name || movie?.title || movie?.original_name}
                    </h1>
                    <h2 className='banner_description'>
                        {truncate(movie?.overview, 150)}
                    </h2>
                    <div className='banner_buttons'>
                        <button className=' btn banner_btn'>Watch</button>
                        <AiFillHeart style={{color:"white"}}/>
                    </div>
                   
                </div>

                <div className='banner--fadeBottom' />
            </header>
        </>
    );
}

export default Banner