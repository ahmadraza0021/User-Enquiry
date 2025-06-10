import React from 'react';
import Nav from './Components/Nav';
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Navbar from './Pages/Navbar';
import Career from './Pages/Career';
import Contact from './Pages/Contact';
import { createBrowserRouter } from 'react-router-dom';
import Getuser from './CRUD/Getuser';
import Adduser from './CRUD/Adduser';
import Updateuser from './CRUD/Updateuser';

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Getuser/>,
    },
    {
      path: "/add",
      element: <Adduser/>,
    },
    {
      path: "/edit/:id",

      element: <Updateuser/>,
    },
  ])
  return (
    //for CRUD
    <div className='bg-slate-200 h-[100vh]'>
      
      <RouterProvider router={route}></RouterProvider>
    </div>
    
    // <>
    // <Nav/>
    // </>


    // for pages & components
    // <BrowserRouter>
    // <div className='bg-slate-300 h-[100vh]'>
    // <Navbar/>
    // <Routes>
    //   <Route path='/' element = {<Home/>}/>
    //   <Route path='/about' element = {<About/>}/>
    //   <Route path='/service' element = {<Service/>}/>
    //   <Route path='/career' element = {<Career/>}/>
    //   <Route path='/contact' element = {<Contact/>}/>
    // </Routes>
    // </div>
    // </BrowserRouter>

    

  )
}

export default App
