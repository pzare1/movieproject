import React,{useState, useEffect} from 'react'
import logo from '../Assets/logo.png'
import profile from '../Assets/profile.png'
import '../Components/Nav.css'
function Nav() {
    const [show, setshow] = useState(false);
    const showNav = () => {
        if(window.scrollY > 0){
            setshow(true)
        }else{
            setshow(false);
        }
    }
    useEffect(() => {
        window.addEventListener("scroll",showNav);
        return () => window.removeEventListener("scroll",showNav)
    }, [])
    return (
        <>
            <div className={`container-fluid semain ${show && "main"}`}> 
                <div className="row d-flex justify-content-between">
                <img style={{maxWidth:100}} src={logo} className="img-responsive"/>
                <img style={{maxWidth:100}} src={profile} className="profile img-responsive"/>
                </div>
            </div>
        </>
    )
}

export default Nav
