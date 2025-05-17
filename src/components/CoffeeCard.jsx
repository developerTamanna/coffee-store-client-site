import React from 'react';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const CoffeeCard = ({ coffee }) => {
  const { _id, name, supplier, price, photo } = coffee;
     

const handleDelete = () => {
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#aaa',
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'Cancel',
  }).then((result) => {
    console.log(result.isConfirmed)
    if (result.isConfirmed) {

    //start deleting the coffee
    fetch(`http://localhost:3000/coffees/${_id}`,{
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data=>{
        // console.log('after delete ',data)
        if(data.deletedCount){
             Swal.fire('Deleted!', 'Your coffee has been deleted.', 'success');
        }
    })

   
    }
  });
};

  return (
    <div className="bg-[#f4f1ed] rounded-lg shadow-md flex items-center p-4 gap-4">
      {/* Image */}
      <img
        src={photo}
        alt={name}
        className="w-24 h-28 object-contain rounded-md"
      />

      {/* Info */}
      <div className="flex-1 text-[#3e2723]">
        <p className="font-semibold">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="font-semibold">
          <span className="font-bold">Chef:</span> {supplier}
        </p>
        <p className="font-semibold">
          <span className="font-bold">Price:</span> {price} Taka
        </p>
      </div>

      {/* 3 Buttons */}
      <div className="flex flex-col gap-2">
        {/* View */}
        <Link to={`/coffee/${_id}`}>
        <button
        
        className="bg-[#d1bfa7] text-white p-2 rounded hover:bg-[#bca88c] transition">
          <FaEye />
        </button>
        </Link>
        {/* Edit */}
       <Link to={`/updateCoffee/${_id}`}>
        <button className="bg-[#D2B48C] text-white p-2 rounded hover:bg-[#c89f71] transition">
          <FaEdit />
        </button>
       </Link>
        {/* Delete */}
        <button
        onClick={()=>handleDelete(_id)}
        className="bg-red-600 text-white p-2 rounded hover:bg-red-700 transition">
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
