import React from 'react'
import Nav from './Nav'
import './HomeScreen.css'
import Banner from './Banner'
import Row from './Row'
import requests from '../Api/Requests'

function HomeScreen() {
    return (
        <>
            <Nav/>
            <Banner/>
            <Row 
            title="Last Movie"
            fetchUrl={requests.fetchNetflixOriginals} 
            largeRow
            />
            <Row 
            title="Best Movie"
            fetchUrl={requests.fetchNetflixOriginals} 
            />
            <Row 
            title="Trending Movie"
            fetchUrl={requests.fetchTrending} 
            />
        </>
    )
}

export default HomeScreen
