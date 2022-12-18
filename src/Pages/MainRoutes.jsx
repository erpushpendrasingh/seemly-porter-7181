import React from "react";
import Homepage from "./Homepage";
import { Routes, Route } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Login from "../Components/Login";
import SignUp from "../Components/SignUp";
import Profile from "../Components/Profile";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "./AdminDashboard";
import AdminEdit from "../Components/AdminEdit";
import AddProduct from "../Components/AddProduct";
import Products from "./Products";
const MainRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/:id/edit"
          element={
            <ProtectedRoute>
              <AdminEdit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/add"
          element={
            <ProtectedRoute>
              <AddProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>page not found</div>} />
      </Routes>
    </>
  );
};

export default MainRoutes;
