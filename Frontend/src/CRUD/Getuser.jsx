import React, {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaEdit } from "react-icons/fa";
import axios from 'axios';
import { toast } from 'react-hot-toast';

const Getuser = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:3000/api/user/getAll");
      setUsers(response.data);
    }
    fetchData();
  }, []);

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:3000/api/user/delete/${userId}`)
    .then((response) => {
      console.log(response);
      setUsers((preUser)=>preUser.filter((user) => user._id !== userId));
      toast.success(response.data.message, {position: "top-right"});
    })
    .catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className='flex items-center h-[100vh]'>
      <div className='w-[60%] bg-white shadow-lg p-12 mx-auto rounded-md'>
        <Link to={"/add"} className='bg-purple-900 text-white font-medium px-3 py-2 rounded-md text-lg'>
          Add User
        </Link>
        <table className='w-full mt-6' cellPadding={10}>
          <thead className='bg-blue-700 text-white'>
            <tr>
              <th className='border-2'>S.No.</th>
              <th className='border-2'>User Name</th>
              <th className='border-2'>User Email</th>
              <th className='border-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            users.map((user, index) => {
              return (
              <tr key={user._id} className='text-center'>
                <td className='border-2'>{index + 1}</td>
                <td className='border-2'>{user.fname} {user.lname}</td>
                <td className='border-2'>{user.email}</td>
                <td className='border-2'>
                  <div className='flex justify-center gap-4'>
                    <button onClick={()=> deleteUser(user._id)} className='bg-red-700 text-white p-2 rounded-md'>
                      <FaTrash />
                    </button>
                    <Link to={`/edit/`+user._id} className='bg-green-700 text-white p-2 rounded-md'>
                      <FaEdit />
                    </Link>
                  </div>
                </td>
              </tr>
              )
            })
          }

          {/* <tr className='text-center'>
                <td className='border-2'>1</td>
                <td className='border-2'>Ahmad Raza</td>
                <td className='border-2'>ahmad@gmail.com</td>
                <td className='border-2'>
                  <div className='flex justify-center gap-4'>
                    <button className='bg-red-700 text-white p-2 rounded-md'>
                      <FaTrash />
                    </button>
                    <Link to={"/edit"} className='bg-green-700 text-white p-2 rounded-md'>
                      <FaEdit />
                    </Link>
                  </div>
                </td>
              </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Getuser;
