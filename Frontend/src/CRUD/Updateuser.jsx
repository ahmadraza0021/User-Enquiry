import React, {useState, useEffect} from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom' 
import { FaBackward } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-hot-toast'; 
const Updateuser = () => {
  const users = {
    fname: "",
    lname: "",
    email: "",
    password: ""
  }

  const {id} = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(users);
  const inputChangeHandler = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});
    console.log(user);
  }

  useEffect(() => {
       axios.get(`http://localhost:3000/api/user/getone/${id}`)
      .then((response) => {
        setUser(response.data); 
      })
      .catch((err) => {
        console.log(err);
      })
  }, [id]);

  const submitForm = async(e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/api/user/update/${id}`, user)        
    .then((res) => {
        console.log(res);
         toast.success(res.data.message, {position: "top-right"});
         navigate("/");
    })
    .catch((err) => {
        console.log(err);
    })
  }
  return (
<div className='flex items-center h-[100vh]'>
        <div className='w-[30%] bg-white shadow-xl p-12 mx-auto rounded-md'>
          <Link to={"/"} className='bg-slate-700 text-white font-medium text-lg w-20 px-3 py-2 rounded-md flex items-center justify-center gap-x-1'><FaBackward />Back</Link>
        <h3 className='font-bold my-3 text-center text-[2rem] text-green-500'>Update user</h3>
        <form className='w-full flex flex-col justify-center' onSubmit={submitForm}>            
            <label htmlFor="fname"  className='mb-1 font-medium'>First Name: </label>
            <input type="text" value={user.fname} onChange={inputChangeHandler} name="fname" id="fname" placeholder='First name...' autoComplete='off' className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>         
            <label htmlFor="lname" className='mb-1 font-medium'>Last Name: </label>
            <input type="text" value={user.lname} onChange={inputChangeHandler} name="lname" id="lname" placeholder='Last name...' autoComplete='off' className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>         
            <label htmlFor="email" className='mb-1 font-medium'>Email: </label>
            <input type="email" value={user.email} onChange={inputChangeHandler} name="email" id="email" placeholder='Enter email...' autoComplete='off' className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>
            <label htmlFor="password" className='mb-1 font-medium'>Password: </label>
            <input type="password" value={user.password} onChange={inputChangeHandler} name="password" id="password" placeholder='Enter password...' autoComplete='off' className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>
            <input type="submit" value="UPDATE USER" className='bg-purple-900 ring text-white rounded-md font-semibold py-3 mt-5'/>        
        </form>
        </div>
    </div>
  )
}

export default Updateuser