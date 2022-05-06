import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../layouts/Container'
import Product from '../../components/Product/Product'

const Products = () => {
  return (
    <Container className='py-20'>
      <h1 className='text-3xl font-bold mb-5 text-center'>Inventory</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className='mt-5 text-center'>
        <Link className='text-xl uppercase font-bold text-indigo-500' to="/inventory">View All</Link>
      </div>
    </Container>
  )
}

export default Products