import React from 'react'
import Container from '../components/Container/Container'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Title from '../components/Title/Title'

const ResetPassword = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Title title='Reset Password' />
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-5'>Reset Password</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] mx-auto'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label>Email</label>
              <input type='email' {...register("email", { required: true })} required/>
              {errors.email && <span className='text-xs text-red-400'>This field is required</span>}
            </div>
          </div>
            
          <input className='px-4 py-3 bg-indigo-500 text-white rounded-md cursor-pointer mt-5' type="submit" value='Reset' />

          <Link to='/login' className='block text-blue-500 mt-5'>Already have an account?</Link>
          <Link to='/register' className='block text-blue-500'>Don't have an account?</Link>
        </form>
      </Container>
    </div>
  )
}

export default ResetPassword