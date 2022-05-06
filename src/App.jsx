import React from 'react'
import { Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout'
import RequireAuth from '../firebase/RequireAuth';

import Home from './pages/Home';
import Inventory from './pages/inventory/Inventory';
import SingleItem from './pages/inventory/SingleItem';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset" element={<ResetPassword />} />

        <Route path="/inventory" element={<RequireAuth><Inventory /></RequireAuth>} />
        <Route path="/inventory/:id" element={<RequireAuth><SingleItem /></RequireAuth>} />
      </Routes>
    </Layout>
  )
}

export default App
