import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Promotions from "./components/Promotions/Promotions.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
/* eslint-disable */

export default function App() {
  // useLocation()
  // useNavigate()

  return <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Shipping" element={<Shipping/>} />
      <Route path="/promotions" element={<Promotions/>} />
      <Route path="/Cruises/:id" element={<CardDetail/>} />
    </Routes>
  </div>;
}
