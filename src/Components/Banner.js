import axios from '../Api/Axios';
import React, { useEffect, useState } from 'react'
import requests from '../Api/Requests';
import '../Components/Banner.css'
function Banner() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
        async function fetchMovie(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            console.log(request);
            setmovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
            return request;
        }
        fetchMovie();
    }, [])
    console.log(movie)
    function cutText(string,n){
        return string?.length>n ? string.substr(0,n-1)+'...' : string 
    }
    return (
        <>
        <div className="col-md-12 banner h-100 p-4"
        style={{
            backgroundSize: "cover",
            height:700,
            backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.2)),url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
            backgroundPosition: "center top"
        }}
        >
            <div className="content">
                <h2 className="text-white text-center p-2 h-100 my-auto">{movie?.name || movie.original_name}</h2>
                <p className="text-banner col-md-8 offset-2">{cutText(`${movie?.overview}`,490)}</p>
                <div className="button d-flex justify-content-center">
                    <button className="btn btn-custom-header">Info</button>
                    <button className="btn btn-custom-sign">Signup</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Banner
