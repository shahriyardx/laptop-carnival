import React from 'react'

import Footer from '../sections/Footer/Footer'
import Header from '../sections/Header/Header'

const Layout = ({ children }) => {
  return (
    <div>
       <Header />
       <div>
        {children}
       </div>
       <Footer />
    </div>
  )
}

export default Layout