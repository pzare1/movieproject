import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";
import Login from './Components/Login';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import Profile from './Components/Profile';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,  
        }))
      }else{
        dispatch(logout());
      }
    })
    return unsub;
  }, [dispatch])
  return (
    <>
     <BrowserRouter>
    <Routes>
    {!user ? (
      <Route path="/" element={<Login />}></Route>
    ):(
      <Route exact path="/" element={<HomeScreen />}></Route>
    )
    }
    <Route path="/profile" element={<Profile />}></Route> 
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
