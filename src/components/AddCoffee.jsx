import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const AddCoffee = () => {

   const handleAddCoffee = (e)=>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    // console.log(formData.entries())
      const newCoffee = Object.fromEntries(formData.entries()); 
    console.log(newCoffee)


    //send coffee data to the db

     fetch('https://coffee-store-server-pi-navy.vercel.app/coffees', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(newCoffee),
  })
    .then(res => res.json())
    .then(data => {
      if (data.insertedId) {
        Swal.fire({
          title: 'Success!',
          text: 'New coffee added successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        });

        form.reset();
      }
    });

   }

   return (
    <div className="bg-[url('https://i.postimg.cc/WdZY7ry0/11.png')] min-h-screen py-10 px-4 flex justify-center items-center bg-cover bg-center">
      <div className="bg-white p-10 rounded-md shadow-md max-w-4xl w-full">
        <Link to="/" className="text-[#374151] font-semibold text-sm hover:underline mb-4 inline-block">
          ← Back to home
        </Link>
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-[#374151]">
          <span className="drop-shadow-md">Add New Coffee</span>
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8 max-w-2xl mx-auto">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.
        </p>

        <form
  onSubmit={handleAddCoffee}
  className="grid grid-cols-1 md:grid-cols-2 gap-6"
>
  <div>
    <label className="block mb-1 text-sm font-medium">Name</label>
    <input
      type="text"
      name="name"
      placeholder="Enter coffee name"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium">Quantity</label>
    <input
      type="text"
      name="quantity"
      placeholder="Quantity name"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium">Supplier</label>
    <input
      type="text"
      name="supplier"
      placeholder="Enter coffee supplier"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium">Taste</label>
    <input
      type="text"
      name="taste"
      placeholder="Enter coffee taste"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium">Price</label>
    <input
      type="text"
      name="price"
      placeholder="Enter coffee Price"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div>
    <label className="block mb-1 text-sm font-medium">Details</label>
    <input
      type="text"
      name="details"
      placeholder="Enter coffee details"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div className="md:col-span-2">
    <label className="block mb-1 text-sm font-medium">Photo</label>
    <input
      type="text"
      name="photo"
      placeholder="Enter photo URL"
      className="w-full border border-gray-300 p-2 rounded"
    />
  </div>
  <div className="md:col-span-2">
    <button
      type="submit"
      className="w-full bg-[#D2B48C] text-black py-2 font-semibold rounded hover:bg-[#c3a26e] transition"
    >
      Add Coffee
    </button>
  </div>
</form>

      </div>
    </div>
  );
};

export default AddCoffee;