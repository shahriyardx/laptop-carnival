import React from 'react'
import Banner from '../sections/Banner/Banner'
import Features from '../sections/Feattures/Features'
import Notify from '../sections/Notify/Notify'
import Products from '../sections/Products/Products'

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Products />
      <Notify />
    </div>
  )
}

export default Home