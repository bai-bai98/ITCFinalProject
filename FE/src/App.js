import React from 'react';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import LoginSignUpModal from "./components/LoginSignUpModal"
import { useEffect, useState } from "react";
import Request from "./components/RequestForm";
import Home from './components/home/Home';
import Posts from './components/posts/Posts';


export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div>
      <NavBar setShowLoginModal={setShowLoginModal} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/request" element={<Request />}></Route>
        <Route path="/Posts" element={<Posts />}></Route>
      </Routes>
      {<LoginSignUpModal show={showLoginModal} setShowLoginModal={setShowLoginModal} setUserAuthorization={3} setUserData={4} />}
    </div>
  )
}
