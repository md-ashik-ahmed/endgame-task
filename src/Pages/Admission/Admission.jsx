import { useContext } from "react";
import { useForm } from "react-hook-form";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";



const Admission = () => {
//   const [axiosSecure] = useAxiosSecure();
  const {user} = useContext(AuthContext)

  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, event) => {
    fetch("https://toy-marketplace-server-md-ashik-ahmed.vercel.app/postToys", {
    method : "POST",
    headers : {'Content-Type' : 'application/json'},
    body : JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((result) =>{
    console.log(result)
    toast.success('Admission Successfully !')
    event.target.reset()

  })
  console.log(data)
  };
 

    return (
         <div className='flex justify-center items-center min-h-screen pt-20'>
      <div className=' p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Admission</h1>
         
        </div>
        <form
         onSubmit={handleSubmit(onSubmit)}
          noValidate=''
          action=''
          className='space-y-4 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-2 grid md:grid-cols-2 gap-6'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
              Name
              </label>
              <input
                type='text'
                {...register("instructor" , { required: true })}
                id='name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
                value={user?.name}
              />
              
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
               Email
              </label>
              <input
                type='email'
                {...register("email" , { required: true })}
                id='email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
                value={user?.email}
              />
               
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
               Subject
              </label>
              <input
                type='text'
                {...register("subject" , { required: true })}
                id='subject'
                placeholder='Enter Class Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.name && <span className="text-sky-600">Class Name is required</span>}
            </div>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
               Phone Number
              </label>
              <input
                type='text'
                {...register("phone" , { required: true })}
                id='phone'
                placeholder='Enter Class Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.name && <span className="text-sky-600">Class Name is required</span>}
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
              Address
              </label>
              <input
                type='text'
                {...register("address" , { required: true })}
                id='address'
                placeholder='Enter Available Seats'
                className='w-full px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
               {errors.name && <span className="text-sky-600">Available seats is required</span>}
            </div>
           
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Date of Birth
              </label>
              <input
                type='text'
                {...register("birth date", { required: true })}
                id='birth date'
                required
                placeholder='Enter Your Birth date'
                className='w-full px-3 py-2 mb-4 border rounded-md border-gray-300 focus:outline-sky-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
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
        </div>
        <ToastContainer/>
        </div>
    );
};

export default Admission;














// const { register, handleSubmit, reset, formState: { errors } } = useForm();
// const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
// const onSubmit = data => {
    
//   const formData = new FormData();
//   formData.append('image', data.image[0])

//   fetch(img_hosting_url, {
//       method: 'POST',
//       body: formData
//   })
//   .then(res => res.json())
//   .then(imgResponse => {
//       if(imgResponse.success){
//           const imgURL = imgResponse.data.display_url;
//           const {name, price, instructor, seats, } = data;
//           const newItem = {name, price: parseFloat(price), instructor, seats:parseFloat(seats), image:imgURL}
//           console.log(newItem)
//           axiosSecure.post('/class', newItem)
//           .then(data => {
//               console.log('after posting new menu item', data.data)
//               if(data.data.insertedId){
//                   reset();
//                   Swal.fire({
//                       position: 'top-end',
//                       icon: 'success',
//                       title: 'Item added successfully',
//                       showConfirmButton: false,
//                       timer: 1500
//                     })
//               }
//           })
//       }
//   })

// };
