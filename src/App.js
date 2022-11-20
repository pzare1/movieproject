import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';
import { auth } from './firebase';
import { logout } from './features/userSlice';
import { useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((userAuth) => {
      if(userAuth){
        console.log(userAuth);
      }else{
        dispatch(logout);
      }
    })
    return unsub;
  }, [])
  const user = null;
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
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
