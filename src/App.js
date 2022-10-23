import React from 'react';
import './App.css';
import HomeScreen from './Components/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './Components/Login';


function App() {
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
