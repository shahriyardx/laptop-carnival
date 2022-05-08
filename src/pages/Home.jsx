import React from 'react'
import Banner from '../sections/Banner/Banner'
import Notify from '../sections/Notify/Notify'
import Products from '../sections/Products/Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <Notify />
    </div>
  )
}

export default Home