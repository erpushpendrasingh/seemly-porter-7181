import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Profile from "../Components/Profile";
import ProtectedRoute from "./ProtectedRoute";
const MainRoutes = () => {
  return (
    <>
      {/* For protected routes wrap the element in <ProtectedRoute><ProductPage></ProtectedRoute> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
