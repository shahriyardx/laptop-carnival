import React, { useEffect, useState } from 'react'
import Container from '../components/Container/Container'
import { useForm } from 'react-hook-form'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../../firebase/useAuth'
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth'
import toast from 'react-hot-toast'
import axios from 'axios'
import { API_URL } from '../../config'

const Register = () => {
  const auth = useAuth()
  const location = useLocation()
  const navigate = useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error, ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true});
  const [updateProfile, updating, update_error] = useUpdateProfile(auth);
  const [accessToken, setAccessToken] = useState(null)

  const { register, handleSubmit, formState: { errors } } = useForm();
  const from = location.state?.from?.pathname || "/"

  const onSubmit = async data => {
    await createUserWithEmailAndPassword(data.email, data.password)
    await updateProfile({ displayName: data.username })

    try {
      const { data: loginData } = await axios.post(`${API_URL}/login`, { email: user.user.email, username: data.username})
      
      if (loginData.error) {
        return toast.error(loginData.error)
      }

      localStorage.setItem('accessToken', data.accessToken)
      setAccessToken(loginData.accessToken)
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong while generating access token')
    }
  };
  
  useEffect(() => {
    if (accessToken) {
      if (user && !loading && !updating) {
        navigate(from)
      }
    }
  }, [user, loading, updating, accessToken])

  return (
    <div>
      <Container className='py-20'>
        <h1 className='text-3xl font-bold text-center mb-5'>Register</h1>

        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] mx-auto'>
          <div className='flex flex-col gap-5'>
            <div className='flex flex-col gap-1'>
              <label>Username</label>
              <input type='text' {...register("username", { required: true })} required/>
              {errors.username && <span className='text-xs text-red-400'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-1'>
              <label>Email</label>
              <input type='email' {...register("email", { required: true })} required/>
              {errors.email && <span className='text-xs text-red-400'>This field is required</span>}
            </div>

            <div className='flex flex-col gap-2'>
              <label>Password</label>
              <input type='password' {...register("password", { required: true })}  required/>
              {errors.password && <span className='text-xs text-red-400'>This field is required</span>}
            </div>
          </div>
          
          <button type='submit' className='px-4 py-3 bg-indigo-500 text-white rounded-md cursor-pointer mt-5'>
            Register
          </button>
          <p className='text-red-500 mt-2'>{error ? error.message : null}</p>

          <Link to='/login' className='block text-blue-500 mt-5'>Already have an account?</Link>
          <Link to='/reset' className='block text-blue-500'>Forgot Password?</Link>
        </form>
      </Container>
    </div>
  )
}

export default Register