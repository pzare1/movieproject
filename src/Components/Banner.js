import React from 'react'
import '../Components/Banner.css'
function Banner() {
    function cutText(string,n){
        return string?.length>n ? string.substr(0,n-1)+'...' : string 
    }
    return (
        <>
        <div className="col-md-12 banner h-100 p-4">
            <div className="content">
                <h2 className="text-white text-center p-2 h-100 my-auto">Find Your Passion !</h2>
                <p className="text-banner col-md-8 offset-2">{cutText(`Audio Description (AD) provides linguistic descriptions of movies and allows visually impaired people to follow a movie along with their peers. Such descriptions are by design mainly visual and thus naturally form an interesting data source for computer vision and computational linguistics. In this work we propose a novel dataset which contains transcribed ADs, which are temporally aligned to full length movies.`,390)}</p>
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
