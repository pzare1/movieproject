import axios from '../Api/Axios'
import React, { useEffect, useState } from 'react'
import './Row.css'
import { NavLink } from 'react-router-dom'
function Row({title,fetchUrl,largeRow = false }) {
    const [movie, setmovie] = useState([])
    const baseURL = "https://image.tmdb.org/t/p/original/";
    useEffect(() => {
        async function fetchData(){
            const getData = await axios.get(fetchUrl);
            setmovie(getData.data.results);
            return getData;
        }
        fetchData();
    }, [fetchUrl])

    return (
        <>
    <div className="container total">
        <div className="text-title">
            <h3 className="text-secondary">{title}</h3>
        </div>
        <div className={`row ${largeRow ? "trending-row" : "norow" }`}>
            {movie.map(item => (
                <NavLink className="linkmovie" to={`movie/${item.id}`}><img src={`${baseURL}${item.backdrop_path}`}/></NavLink>
            ))}
        </div>
    </div>
        </>
    )
}

export default Row
