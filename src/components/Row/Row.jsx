import React, { useState, useEffect, useRef } from "react";
import axios from "../../pages/Axios/axios";
import Footer from "../../components/Footer/Footer";
import "./Row.css";
import { Link } from "react-router-dom";


const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.table(movies);

    const cardsRef = useRef();

    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(() =>{
        cardsRef.current.addEventListener("wheel", handleWheel);
    }, [])

    return (
        <div className="row">
            <h2>{title}</h2>
           
            <div className="row__posters" ref={cardsRef}>

            {movies.map(movie => (
                <img
                key={movie.id}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} 
                />
            ))}
            </div>
        </div>
    )
}

export default Row;
