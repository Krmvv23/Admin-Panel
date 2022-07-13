import React, { useState } from 'react'
import OrderInfo from '../OrderInfo/OrderInfo'
import OrderList from '../OrderLists/OrderLists'

const OrderPage = () => {
  const [order, setOrder] = useState()

  const orderInfo = (obj,e) => {
    document.querySelectorAll('.list').forEach(item => {
      item.classList.remove('active')
      item.contains(e.target) && item.classList.add('active')
    })
    return setOrder(obj)
  }
  return (
    <div className='row'>
      <OrderList orderInfo={orderInfo} />
      <OrderInfo order={order} />
    </div>
  )
}

export default OrderPage