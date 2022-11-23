import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase'
import Nav from './Nav'

function Profile() {
    const user = useSelector(selectUser)
    const salam = () => {
        auth.signOut();
        console.log(user);
    }
    console.log(user);    
    return (
        <>
            <Nav/>
        <div className="container"> 
            <div className="row mt-4">
                <div className="col-md-6 m-auto">
                    <h2 className="text-white">Edit Profile</h2>
                    <hr className="text-muted"></hr>
                    <div className="bg-secondary p-2">
                        <p className="text-white my-auto">{user.email}</p>
                    </div>
                    <button onClick={salam} className="btn btn-danger mt-2 w-100">Sign out</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile
