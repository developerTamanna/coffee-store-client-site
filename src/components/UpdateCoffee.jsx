import React from 'react';
import { Link } from 'react-router';

const UpdateCoffee = () => {
    return (
    <div className="bg-[url('https://i.postimg.cc/WdZY7ry0/11.png')] min-h-screen py-10 px-4 flex justify-center items-center bg-cover bg-center">
      <div className="bg-white p-10 rounded-md shadow-md max-w-4xl w-full">
        <Link to="/" className="text-[#374151] font-semibold text-sm hover:underline mb-4 inline-block">
          ← Back to home
        </Link>

        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#374151]">
          <span className="drop-shadow-md">Update Existing Coffee Details</span>
        </h2>

        <p className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at
          its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
          to using Content here.
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input type="text" defaultValue="Americano Coffee" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Chef</label>
            <input type="text" defaultValue="Mr. Matin Paul" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Supplier</label>
            <input type="text" defaultValue="Cappu Authorizer" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Taste</label>
            <input type="text" defaultValue="Sweet and hot" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Category</label>
            <input type="text" defaultValue="Americano" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Details</label>
            <input type="text" defaultValue="Espresso with hot water" className="w-full border border-gray-300 p-2 rounded" />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">Photo</label>
            <input
              type="text"
              defaultValue="https://i.ibb.co/PQqMPr9/11.png"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-[#D2B48C] text-black py-2 font-semibold rounded hover:bg-[#c3a26e] transition"
            >
              Update Coffee Details
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;