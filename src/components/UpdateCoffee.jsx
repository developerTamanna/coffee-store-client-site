import React from 'react';
import { Link, useLoaderData } from 'react-router';
  import Swal from 'sweetalert2';

const UpdateCoffee = () => {
  const { _id, name, quantity, supplier, taste, price, details, photo } = useLoaderData();
    

const handleUpdateCoffee = (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);
  const updatedCoffee = Object.fromEntries(formData.entries());
  console.log(updatedCoffee);

  // send updated coffee to the db
  fetch(`https://coffee-store-server-pi-navy.vercel.app/coffees/${_id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updatedCoffee),
  })
    .then(res => res.json())
    .then(data => {
      if (data.modifiedCount) {
        // Sweet alert show
        Swal.fire({
          title: 'Success!',
          text: 'Coffee updated successfully.',
          icon: 'success',
          confirmButtonText: 'Okay'
        });
      }
    })
    .catch(error => {
      console.error('Error updating coffee:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Something went wrong while updating.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
    });
};


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

        <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              name="name"
              type="text"
              defaultValue={name}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">quantity</label>
            <input
              name="quantity"
              type="text"
              defaultValue={quantity}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Supplier</label>
            <input
              name="supplier"
              type="text"
              defaultValue={supplier}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Taste</label>
            <input
              name="taste"
              type="text"
              defaultValue={taste}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Price</label>
            <input
              name="price"
              type="text"
              defaultValue={price}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Details</label>
            <input
              name="details"
              type="text"
              defaultValue={details}
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block mb-1 text-sm font-medium">Photo</label>
            <input
              name="photo"
              type="text"
              defaultValue={photo}
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
