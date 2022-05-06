import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../../components/Container/Container'
import Product from '../../components/Product/Product'

const Products = () => {
  return (
    <Container className='py-20'>
      <h1 className='text-4xl font-bold mb-10 text-center'>Inventory</h1>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>

      <div className='mt-10 text-center'>
        <Link className='text-lg uppercase font-bold bg-green-500 px-4 py-3 text-white rounded-md' to="/inventory">Manage Inventory</Link>
      </div>
    </Container>
  )
}

export default Products