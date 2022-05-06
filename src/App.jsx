import React from 'react'
import { Routes, Route } from "react-router-dom";

import Layout from './layouts/Layout'
import Home from './pages/Home';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Layout>
  )
}

export default App
