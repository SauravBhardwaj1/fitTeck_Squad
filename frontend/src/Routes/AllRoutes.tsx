import React from 'react'
import { Route, Routes } from "react-router-dom";
import Register from '../Pages/Register';
import Login from '../Pages/Login';
import Homepage from '../Pages/Homepage';

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
    </Routes>
  )
}

export default AllRoutes