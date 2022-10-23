import React from 'react'
import logo from '../Assets/logo.png'

function SignPop() {
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
                        <input className="form-control sign m-2" type="text" placeholder="Type Your Name ..."/>
                        <input className="form-control sign m-2" type="email" placeholder="Type Your Email ..."/>
                        <input className="form-control sign m-2" type="text" placeholder="Type Your Mobile ..."/>
                        <button className="btn btn-danger m-2 w-100">Submit</button> 
                    </form>
                    </div>
                    </div>
        </>
    )
}

export default SignPop
