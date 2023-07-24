

import {FcGoogle } from "react-icons/fc";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'

import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider";


const Register = () => {
  const navigate = useNavigate();
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = data => {

    createUser(data.email, data.password, data.photoURL)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email, image : data.photoURL }
                        fetch('https://summer-camp-server-md-ashik-ahmed.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })

                    })
                    .catch(error => console.log(error))
            })
  };
  
  return (
    <div className='flex justify-center items-center min-h-screen pt-20'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-sky-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Register</h1>
         
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
                Name
              </label>
              <input
                type='text'
                {...register("name" , { required: true })}
                id='name'
                placeholder='Enter Your Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.name && <span className="text-sky-600">Name is required</span>}
            </div>
            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                required
                type='file'
                id='image'
                {...register("image", { required: true })}
                accept='image/*'
              />
              {errors.image && <span className="text-sky-600">Image URL is required</span>}
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                {...register("email", { required: true })}
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
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
               type="password" {...register("password", {required: true,minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/})} placeholder="password"/>
              {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
              {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
              {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
              {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase, one number and one special character.</p>}
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                Confirm Password
                </label>
              </div>
              <input
              className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
               type="password" {...register("ConfirmPassword", {required: true,minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/})} placeholder="Confirm Password"/>
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
          
        </div>
        <p className='px-6 text-sm text-center text-gray-400'>
          Already have an account?{' '}
          <Link
            to='/login'
            className='hover:underline hover:text-sky-500 text-gray-600'
          >
            Login
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Register
