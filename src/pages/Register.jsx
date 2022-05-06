import React from 'react'
import Container from '../layouts/Container'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-5'>Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] mx-auto'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label>Email</label>
              <input type='email' {...register("email", { required: true })} />
              {errors.email && <span className='text-xs text-red-400'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
              <label>Password</label>
              <input type='password' {...register("password", { required: true })} />
              {errors.password && <span className='text-xs text-red-400'>This field is required</span>}
            </div>
          </div>
          
          <input className='px-4 py-3 bg-indigo-500 text-white rounded-md cursor-pointer mt-5' type="submit" value='Register' />

          <Link to='/login' className='block text-blue-500 mt-5'>Already have an account?</Link>
          <Link to='/reset' className='block text-blue-500'>Forgot Password?</Link>
        </form>
      </Container>
    </div>
  )
}

export default Register