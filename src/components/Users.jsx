import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { FaEye, FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
// handleDelete func

const handleDelete = (id)=>{
Swal.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#d33',
  cancelButtonColor: '#3085d6',
  confirmButtonText: 'Yes, delete it!'
}).then((result) => {
  if (result.isConfirmed) {
    //  delete works

    fetch(`http://localhost:3000/users/${id}`,{
        method: 'DELETE'
    })
    .then(res=> res.json())
    .then(data=>{
        // console.log('after delete ',data)
        if(data.deletedCount){
        const remainingUser = users.filter(user=> user._id !==id);
        setUsers(remainingUser)   
        //todo delete user from firebase 
        Swal.fire(
            'Deleted!',
            'The user has been deleted.',
            'success'
            );
        }
    })
    // console.log('User confirmed delete');
    
  }
});

}

  return (
    <div className="p-4 mt-20">
      <h1 className="text-xl font-bold mb-4">Users: {users.length}</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border px-4 py-2">#</th>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Phone</th>
              <th className="border px-4 py-2">Address</th>
              <th className="border px-4 py-2">Photo</th>
              <th className="border px-4 py-2">Created</th>
              <th className="border px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((user, index) => (
                <tr key={user._id}>
                  <td className="border px-4 py-2 text-center">{index + 1}</td>
                  <td className="border px-4 py-2">{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user.phone}</td>
                  <td className="border px-4 py-2">{user.address}</td>
                  <td className="border px-4 py-2">
                    <img
                      src={user.photo}
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                  </td>
                  <td className="border px-4 py-2">{user.creationTime}</td>
                  <td className="border px-4 py-2 text-center space-x-2">
                    <button title="View" className="text-blue-600 hover:text-blue-800">
                      <FaEye />
                    </button>
                    <button title="Edit" className="text-green-600 hover:text-green-800">
                      <FaEdit />
                    </button>
                    <button
                    onClick={()=>handleDelete(user._id)}
                    title="Delete" className="text-red-600 hover:text-red-800">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
