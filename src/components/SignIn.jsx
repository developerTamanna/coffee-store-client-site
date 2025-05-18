import React, { use } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const SignIn = () => {
    const {signInUser} = use(AuthContext)
    const handleSign =(e)=>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value
    const password = form.password.value;
    console.log(email, password);

    //firebase sign in send
    signInUser(email, password)
    .then(result=>{
        console.log(result.user);
         const signInInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime


         }
        //update last sign in to the db

        fetch('https://coffee-store-server-pi-navy.vercel.app/users',{
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(signInInfo)
        }).then(res=>res.json()).then(data=>{
          console.log('after update',data)

        })

    })
    .catch(error=>{
        console.log(error)
    })

    }
    return (
        <div>
<div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login to your account</h2>
        <form
        onSubmit={handleSign}
        className="space-y-4">
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
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <button
          className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          <FaGoogle />
          Continue with Google
        </button>

        {/* ✅ Sign up link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don't have an account?{' '}
          <Link to="/signup" className="text-blue-600 hover:underline font-medium">
            Sign up
          </Link>
        </p>
      </div>
    </div>
        </div>
          );
    
};

export default SignIn;