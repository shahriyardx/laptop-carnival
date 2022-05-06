import React from 'react'
import { Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout'
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}

export default App
