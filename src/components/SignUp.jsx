import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';
import Swal from 'sweetalert2'

const SignUp = () => {

    const {createUser} = use(AuthContext)
    console.log(createUser)

  //function

  const handleSignup = (e) =>{
   e.preventDefault();
   const form = e.target;
   const formData = new FormData(form);

   //new
   const {email, password, ...restFormData} = Object.fromEntries(formData.entries());
//    const userProfile = {
//     email,
//     ...restFormData
//    }

//    const email = formData.get('email');
//    const password = formData.get('password');
//    console.log(email, password, userProfile)

   //create user in the firebase 

   createUser(email, password)
   .then(result =>{
    console.log(result.user)

  const userProfile ={
    email, 
    ...restFormData,
    creationTime: result.user?.metadata?.creationTime,
    lastSignInTime: result.user?.metadata?.lastSignInTime,

    
  }
    // save profile info in the db
    fetch('https://coffee-store-server-pi-navy.vercel.app/users',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userProfile)
    })
    .then(res=> res.json())
    .then(data=>{
        // console.log('after profile save',data)
        if(data.insertedId){
                    Swal.fire({
            title: 'Success!',
            text: 'User profile saved successfully!',
            icon: 'success',
            confirmButtonText: 'OK'
        });

        }
    })

   })
   .catch(error =>{
 console.log(error);
    Swal.fire({
        title: 'Error!',
        text: 'Something went wrong!',
        icon: 'error',
        confirmButtonText: 'Try Again'
    });   })
  }

    return (
       <>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 mt-20">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Create your account</h2>
        
        <form 
  onSubmit={handleSignup}
  className="space-y-4 ">

  {/* Name */}
  <div>
    <label className="block text-sm font-medium mb-1">Name</label>
    <input
      type="text"
      name="name"
      required
      className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your name"
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium mb-1">Email</label>
    <input
      type="email"
      name="email"
      required
      className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="you@example.com"
    />
  </div>

  {/* Photo URL */}
  <div>
    <label className="block text-sm font-medium mb-1">Photo URL</label>
    <input
      type="text"
      name="photo"
      required
      className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="https://your-photo-url.com"
    />
  </div>

  {/* Phone Number */}
  <div>
    <label className="block text-sm font-medium mb-1">Phone Number</label>
    <input
      type="tel"
      name="phone"
      required
      className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="+8801XXXXXXXXX"
    />
  </div>

  {/* Address */}
  <div>
    <label className="block text-sm font-medium mb-1">Address</label>
    <input
      type="text"
      name="address"
      required
      className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Your full address"
    />
  </div>

  {/* Password */}
  <div>
    <label className="block text-sm font-medium mb-1">Password</label>
    <input
      type="password"
      name="password"
      required
      className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="••••••••"
    />
  </div>

  {/* Confirm Password */}
  

  {/* Submit Button */}
  <button
    type="submit"
    className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
  >
    Sign Up
  </button>
</form>


        {/* Already have an account? */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/signin" className="text-blue-600 hover:underline font-medium">
            Sign here
          </Link>
        </p>
      </div>
    </div>
       
       </>
    );
};

export default SignUp;