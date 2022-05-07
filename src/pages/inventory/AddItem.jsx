import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import useAuth from '../../../firebase/useAuth';
import Container from '../../components/Container/Container'

const AddItem = () => {
  const auth = useAuth()
  const { register, handleSubmit } = useForm();
  const [user, loading] = useAuthState(auth)

  const onSubmit = data => {
    const full_data = {...data}
    full_data.suplier = user?.displayName || 'Anonymous'
    full_data.suplier_email = user?.email

    console.log(full_data)
  }

  return (
    <Container className='py-20'>
      <h1 className='text-3xl font-bold text-center mb-10'>Add Item</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h1 className='text-2xl font-bold'>Supplier Info</h1>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
            <div className='flex flex-col'>
              <label>Name</label>
              <input defaultValue={user?.displayName} type="text" className='disabled:bg-zinc-400 mt-2' disabled/>
            </div>

            <div className='flex flex-col'>
              <label>Email</label>
              <input defaultValue={user?.email} type="email" className='disabled:bg-zinc-400 mt-2' disabled/>
            </div>
          </div>

          <h1 className='text-2xl font-bold mt-10'>Item Info</h1>
          <div className='mt-2'>
            <label>Short Description</label>
            <input type="text" {...register('short_description', { required: true })} className='w-full' required/>
          </div>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2'>
            <div className='flex flex-col'>
              <label>Image Url</label>
              <input type="text" {...register('image', { required: true })} className='mt-2' required/>
            </div>

            <div className='flex flex-col'>
              <label>Brand</label>
              <input type="text" {...register('brand', { required: true })} className='mt-2' required/>
            </div>

            <div className='flex flex-col'>
              <label>Price</label>
              <input type="number" {...register('price', { required: true, min: 1})} min={1} className='mt-2' required/>
            </div>

            <div className='flex flex-col'>
              <label>Quantity</label>
              <input type="number" {...register('quantity', { required: true, min: 1})} min={1} className='mt-2' required/>
            </div>
          </div>

          <div className='mt-2'>
            <label>Details <span className='text-zinc-600 font-bold'>(Supports Markdown)</span></label>
            <textarea name="description" rows="10" className='w-full' {...register('description', { required: true })} />
          </div>

          <div className='mt-5'>
            <button type='submit' className='px-5 py-3 bg-indigo-500 rounded-md text-white text-xl'>Add Item</button>
          </div>
        </div>
      </form>
    </Container>
  )
}

export default AddItem