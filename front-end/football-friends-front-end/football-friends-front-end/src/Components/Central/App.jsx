import NavBar from "../Navigation/NavBar";
import Homepage from "./Homepage";
import Profile from "../Profile/Profile";
import Friends from "../Profile/Friends";
import Messages from "../Profile/Messages";
import Search from "../Navigation/Search";
import Login from "../Authentication/Login";
import Register from "../Authentication/Register";
import { Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;