
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import {FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import { AuthContext } from '../../Providers/AuthProvider';
import GoogleSign from '../Shared/GoogleSign';

const Login = () => {

const from = location.state?.from?.pathname || "/";

const navigate = useNavigate();
const {signIn} = useContext(AuthContext)
const { register, handleSubmit } = useForm();
const onSubmit = data => {

  signIn(data.email, data.password)
    .then(result => {
    const user = result.user;
    console.log(user);
    Swal.fire({
        title: 'User Login Successful.',
        showClass: {
            popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
        }
    });
    navigate(from, { replace: true });
})

};


return (
  <div className='flex justify-center items-center min-h-screen pt-20'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
        </div>
        <form
         onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-4 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                {...register("email")}
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                {...register("password")}
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='bg-sky-500 w-full rounded-md py-3 text-white'
            >
              {    (
                'Continue'
              )}
            </button>
          </div>
        </form>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Register with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <div
       
          className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'
        >
        <FcGoogle></FcGoogle>
        <GoogleSign></GoogleSign>
          
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
        Don't have an account?{' '}
          <Link
            to='/register'
            className='hover:underline hover:text-sky-500 text-gray-600'
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
    );
};

export default Login;