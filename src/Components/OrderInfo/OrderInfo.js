import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux/es/exports'
import { fetchOrder } from '../../Redux/features/orderSlice'
import { show } from '../../Redux/features/alertSlice'
import './OrderInfo.scss'

const OrderInfo = ({ order = [] }) => {
  const dispatch = useDispatch()
  const [orderStatus,setOrderStatus] = useState(0)

  useEffect(()=>{
    setOrderStatus(order.status)
  },[order])

  const setStatus = async (status) => {
    await axios.put(`http://localhost:8000/orders/${order.id}`, { ...order, status })
    dispatch(fetchOrder())
    dispatch(show(true))
    setOrderStatus(status)
  }

  return (
    <div className='col-8 orderInfo px-5'>
      <h4 className='mb-5'>Order Info</h4>
      {
        Object.keys(order).length > 0 ?
          <div>
            <div className='mb-5'>
              <h5>Foods</h5>
              {order.food.map(item => {
                return (
                  <div className='row mx- justify-content-between border-bottom mb-3 food-list' key={item.name}>
                    <h6 className='col m-0'>{item.name}</h6>
                    <p className='col text-end m-0'>{item.count}x</p>
                    <p className='col text-end m-0'>{item.price}$</p>
                  </div>)
              })}
            </div>
            <div className='row justify-content-between bg-grey'>
              <div className='col'>
                <p> <span className='fw-bold'> Waiter:</span> {order.waiter}</p>
                <p className='small'>{order.date}</p>
              </div>
              <div className='col d-flex align-items-center justify-content-end'>
                <p className='small'>
                {orderStatus == 0 && <span className='text-danger fw-bold'>Pending</span> }
                {orderStatus == -1 && <span className='text-danger fw-bold'>Canceled</span> }
                {orderStatus == 1 && <span className='color-blue fw-bold'>Done</span> }
                </p>
              </div>
              <div className='col d-flex align-items-center justify-content-end'>
                <h5 className='m-0'>{order.totalPrice}$</h5>
              </div>
            </div>
            {
              orderStatus == 0 &&
              <div className='text-end mt-5 '>
                <button className='btn cancel-btn' onClick={() => setStatus(-1)}>Cancel</button>
                <button className='btn done-btn' onClick={() => setStatus(1)}>Done</button>
              </div>
            }
          </div>
          : <div className='text-center'><h5>Select Order</h5></div>
      }
    </div>
  )
}

export default OrderInfo