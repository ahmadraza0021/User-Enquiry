import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBackward } from "react-icons/fa6";
import axios from 'axios';
import { toast } from 'react-hot-toast';
const Adduser = () => {

    const users = {
        fname: "",
        lname: "",
        email: "",
        password: ""
    }

    const [user, setUser] = useState(users);
    const navigate = useNavigate(); //This is react hook(useNavigate hook to navigate to another page means adduser page to getuser page)

    const inputHandler = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    
    const submitForm = async(e) => {
        e.preventDefault();
        await axios.post("http://localhost:3000/api/user/create", user)        
        .then((response) => {
            console.log(response);
            toast.success(response.data.message, {position: "top-right"});
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
        <h3 className='font-bold my-3 text-center text-[2rem] text-green-500'>Add new user</h3>
        <form className='w-full flex flex-col justify-center' onSubmit={submitForm}>            
            <label htmlFor="fname" className='mb-1 font-medium'>First Name: *</label>
            <input type="text" name="fname" onChange={inputHandler} id="fname" placeholder='First name...' autoComplete='off' required className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>         
            <label htmlFor="lname" className='mb-1 font-medium'>Last Name: *</label>
            <input type="text" name="lname" onChange={inputHandler} id="lname" placeholder='Last name...' autoComplete='off' required className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>         
            <label htmlFor="email" className='mb-1 font-medium'>Email: *</label>
            <input type="email" name="email" onChange={inputHandler} id="email" placeholder='Enter email...' autoComplete='off' required className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>
            <label htmlFor="password" className='mb-1 font-medium'>Password: *</label>
            <input type="password" name="password" onChange={inputHandler} id="password" placeholder='Enter password...' required autoComplete='off' className='mb-2 p-2 border-2 border-black rounded-md outline-none'/>
            <input type="submit" value="ADD USER" className='bg-purple-900 ring text-white rounded-md font-semibold py-3 mt-5'/>        
        </form>
        </div>
    </div>
  )
}

export default Adduser