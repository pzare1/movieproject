import React, { useRef } from 'react'
import logo from '../Assets/logo.png'
import { auth } from '../firebase';
import '../Components/SignPop.css'

function SignPop() {
    const emailRef = useRef(null);
    const passRef = useRef(null);

    const signUp = (e) => {
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authuser) => {
            console.log(authuser);
        }).catch((error) => {
            alert(error.message)
        });
    }
    const signIn = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passRef.current.value
        ).then((authuser) => {
            console.log(authuser);
        }).catch((error) => {
            alert(error.message)
        });
    }
    return (
        <>
             <div className="row d-flex justify-content-between">
                    <img style={{maxWidth:100}} src={logo} className="img-responsive"/>
                    </div>
                    <div className="row text-center">
                        <h1 className="text-white text-sign p-4 fw-bold">SignUP For Free !</h1>
                        <p className="text-white text-justify w-50 mx-auto">Please Fill The Form</p>
                        <div className="d-flex flex-column mx-auto mt-4 newdiv">
                    <form className="form-group w-25 form-submit mx-auto">
                        <input ref={emailRef} className="form-control sign m-2" type="text" placeholder="Email"/>
                        <input ref={passRef} className="form-control sign m-2" type="password" placeholder="Password"/>
                        <button onClick={signIn} className="btn btn-danger m-2 w-100">Login</button> 
                        <button onClick={signUp} className="btn btn btn-light text-white subbtn">Create New Account</button>
                    </form>
                    </div>
                    </div>
        </>
    )
}

export default SignPop
