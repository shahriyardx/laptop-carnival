import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div className='rounded-lg bg-zinc-200 overflow-hidden p-4 sm:p-7'>
      <img src="/images/products/macbook.jpg" alt="Macbook" className='w-full aspect-video rounded-lg' />

      <div></div>
      <h2 className='text-2xl font-bold my-2'>MacBook Pro 2022</h2>
      <p className=''>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt voluptatibus laboriosam ex cupiditate...</p>
      
      <div className='mt-4 flex flex-col gap-1'>
        <p className='text-lg font-normal'>Supplier - <span className='font-extrabold'>Whoami</span></p>
        <p className='text-lg font-normal'>Price - <span className='font-extrabold'>$100</span></p>
        <p className='text-lg font-normal'>Quantity - <span className='font-extrabold'>89</span></p>
      </div>

      <Link className='px-3 py-2 bg-indigo-500 text-white inline-block rounded-md mt-5' to="/inventory">Manage</Link>
    </div>
  )
}

export default Product