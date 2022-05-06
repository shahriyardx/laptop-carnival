import React from 'react'
import Container from '../components/Container/Container'
import { useForm } from 'react-hook-form'
import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-5'>Login</h1>

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
          <div className='grid grid-cols-3 gap-4 mt-5'>
            <input className='py-3 bg-indigo-500 text-white rounded-md cursor-pointer' type="submit" value='Login' />
            <button type='button' className='py-3 bg-black col-span-2 flex items-center gap-2 justify-center rounded-md text-white'><FcGoogle className='text-2xl' /> Google</button>
          </div>

          <Link to='/register' className='block text-blue-500 mt-5'>Don't have an account?</Link>
          <Link to='/reset' className='block text-blue-500'>Forgot Password?</Link>
        </form>
      </Container>
    </div>
  )
}

export default Login