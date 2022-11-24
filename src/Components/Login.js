import React, { useState } from 'react';
import '../Components/Login.css'
import logo from '../Assets/logo.png'
import profile from '../Assets/profile.png'
import SignPop from './SignPop';

function Login() {
    const [signIn, setsignIn] = useState(false);
    return (
        <>
            <div className="container-fluid backlogin"> 
            {
                signIn ? (
                    <SignPop/>
                ):(
                <>
                    <div className="row d-flex justify-content-between">
                    <img style={{maxWidth:100}} src={logo} className="img-responsive"/>
                    <button onClick={() => setsignIn(true)} style={{maxHeight:40,maxWidth:90,margin:15}} className="signin btn btn-danger">Sign up</button> 
                    </div>
                    <div className="row text-center">
                        <h1 className="text-white text-sign p-4 fw-bold">SignUP For Free !</h1>
                        <p className="text-white text-justify w-50 mx-auto">Filmia is a film-review website to find the best movie to watch signup today for free. </p>
                        <div className="d-flex justify-content-center w-75 mx-auto mt-4">
                        <input className="form-control signinput" type="email" placeholder="Type Your Email ..."/>
                        <button onClick={() => setsignIn(true)} className="signin btn btn-danger">Get Started</button> 
                        </div>
                    </div>
                    </>
                )
            }
               
            </div>
        </>
    )
}

export default Login
