import React,{useState, useEffect} from 'react'
import logo from '../Assets/logo.png'
import profile from '../Assets/profile.png'
import '../Components/Nav.css'
import { useNavigate } from 'react-router-dom';


function Nav() {
    const history = useNavigate();
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
                <img onClick={() => history('/', { replace: true })} style={{maxWidth:100}} src={logo} className="img-responsive" role="button"/>
                <button onClick={() => history('/profile', { replace: true })} style={{maxWidth:50,maxHeight:40}} className="btn btn-outline-light my-auto" ><i class="fa fa-user" aria-hidden="true"></i></button>
                </div>
            </div>
        </>
    )
}

export default Nav
