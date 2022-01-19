import React from 'react';
import NavBar from './components/navBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import LoginSignUpModal from "./components/LoginSignUpModal"
import { useEffect, useState } from "react";
import Request from "./components/RequestForm";


export default function App() {
  const [showLoginModal, setShowLoginModal] = useState(false)

  return (
    <div>
      <NavBar setShowLoginModal={setShowLoginModal} />
      <Routes>
        <Route path="/request" element={<Request />}></Route>
      </Routes>
      {<LoginSignUpModal show={showLoginModal} setShowLoginModal={setShowLoginModal} setUserAuthorization={3} setUserData={4} />}
    </div>
  )
}
