import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { BrowserRouter } from "react-router-dom";
import './index.css'
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
)
