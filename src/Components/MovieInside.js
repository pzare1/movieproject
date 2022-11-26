import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

function MovieInside() {
    const [movieItem, setmovieItem] = useState([]);
    let params = useParams();
    const getData = async(name) => {
        const data = await fetch(`https://api.themoviedb.org/3/find/{${params}}?api_key="38d0409f65543e3dd6d22adbccdefa20"`);
        const finalData = await data.json();
        setmovieItem(finalData);
    }
    useEffect(() => {
    getData(params.title)
    console.log(params.title)
    }, [params.title])

    return (
        <>  

        </>
    )
}

export default MovieInside
