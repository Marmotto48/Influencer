import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Pages/Homepage/Homepage";
import Login from "./Pages/Login/Login";
import Chat from "./Pages/Customer Dashboard/Pages/Chat/Chat";
import ConnectedRoute from "./components/Routes/Connected";
import Home from "./Pages/Customer Dashboard/Pages/Home/Home";
import News from "./Pages/Customer Dashboard/Pages/News Feed/News";
import Search from "./Pages/Customer Dashboard/Pages/Search/Search";

import CustomerProfile from "./Pages/Customer Dashboard/Pages/Profile/CustomerProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chat" element={<ConnectedRoute Component={Chat} />} />
        <Route
          path="/dashboard"
          element={<ConnectedRoute Component={Home} />}
        />
        <Route path="/news" element={<ConnectedRoute Component={News} />} />
        <Route path="/search" element={<ConnectedRoute Component={Search} />} />
        <Route
          path="/profile"
          element={<ConnectedRoute Component={CustomerProfile} />}
        />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/customer/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
