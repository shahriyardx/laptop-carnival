import React from 'react'
import Container from '../../components/Container/Container'
import { useForm } from 'react-hook-form' 

const SingleItem = () => {
  const { register, handleSubmit, formState: { errors }} = useForm()
  
  const updateStock = (data) => {
    //
  }
  
  return (
    <Container className='py-20'>
      <div className='grid grid-cols-2 gap-5'>
        <div>
          <img src="/images/products/macbook.jpg" alt="Macbook" className='rounded-lg'/>
        </div>

        <div>
          <h1 className='text-3xl font-bold'>Macbook Pro 2022</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat laudantium voluptas vitae soluta dolores perferendis ut omnis facere consequuntur velit sit sunt, aperiam corporis porro veniam doloribus est suscipit veritatis?</p>

          <div className='mt-4'>
            <p className='font-bold text-xl'>Price - <span className='font-normal text-blue-500'>$100</span></p>
            <p className='font-bold text-xl'>Brand - <span className='font-normal text-blue-500'>Apple</span></p>
            <p className='font-bold text-xl'>Supplier - <span className='font-normal text-blue-500'>Whoami</span></p>
            <p className='font-bold text-xl'>Stock - <span className='font-normal text-blue-500'>105</span></p>
          </div>

          <div className='mt-4'>
            <button className='px-5 py-3 font-semibold tracking-wide bg-yellow-500 rounded-md text-white'>Delivered</button>
          </div>

          <div className='mt-10'>
            <h1 className='text-xl font-bold mb-2'>Restock</h1>
            <form onSubmit={handleSubmit(updateStock)}>
              <div className='flex'>
                <input type="number" placeholder='Quantity' className='h-full' {...register('quantity', { min: 1, required: true})} required/>
                <button className='px-5 font-semibold tracking-wide bg-green-500 text-white inline-block'>Update</button>
              </div>
              {errors.quantity && <p className='text-sm text-red-400'>Please put a valid quantity</p>}
            </form>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h2 className='text-3xl font-bold mb-2'>Description</h2>
      </div>
    </Container>
  )
}

export default SingleItem