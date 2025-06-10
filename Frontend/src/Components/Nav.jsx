import React from 'react'
import logo from '../assets/Website-logo.png'
const Nav = () => {
  return (
    <div className='flex items-center justify-between'>
        {/* logo */}
        <img src={logo} alt="" className='w-40'/>
        <div className='flex gap-8'>
        <div className='flex gap-6 items-center font-semibold'>
            <a href="#" className='hover:text-[#f4ba23]'>Home</a>
            <a href="#" className='hover:text-[#f4ba23]'>About IGE</a>
            <select className="select max-w-xs">
                <option disabled selected>Study Destinations</option>
                <option>United Kingdom</option>
                <option>United State of America</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Hungry</option>
                <option>Finland</option>
                <option>Turkey</option>
                <option>Cyprus</option>
                <option>Malaysia</option>
            </select>
            <a href="#" className='hover:text-[#f4ba23]'>Events</a>
            <a href="#" className='hover:text-[#f4ba23]'>IELTS</a>
            <a href="#" className='hover:text-[#f4ba23]'>Blog</a>
            <a href="#" className='hover:text-[#f4ba23]'>Contact</a>
        </div>
        <div className='border rounded-lg w-44 p-2 bg-[#693a96] font-bold text-white hover:bg-[#f4ba23] hover:text-black'>
            <button>Online Counseling</button>
        </div>
        </div>
    </div>
  )
}

export default Nav