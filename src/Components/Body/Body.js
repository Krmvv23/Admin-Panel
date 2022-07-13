import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import OrderPage from '../OrderPage/OrderPage'
import Alert from "../Alert/Alert";

const Body = () => {
  return (
    <div className='col-11 p-0'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<OrderPage />} />
      </Routes>
      <Alert />

    </div>
  )
}

export default Body