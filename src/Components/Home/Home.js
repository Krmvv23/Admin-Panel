import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Home.scss'

const Home = () => {
  const { orders } = useSelector(state => state)
  const [allPrice, setAllPrice] = useState([])
  const [allOrders, setAllOrders] = useState(0)
  const [allDoneOrders, setAllDoneOrders] = useState([])

  useEffect(() => {
    !orders.loading && orders.data.payload?.filter(item => {
      item.status == 1 && setAllDoneOrders(allDoneOrders => [...allDoneOrders, item])
      return item.status == 1
    }).map(order => {
      setAllPrice(allPrice => [...allPrice, order.totalPrice])
    })

    !orders.loading && setAllOrders(orders.data.payload?.length)

  }, [orders.data])

  return (

    <div className='bg-grey '>
      <div className='home'>
        <div className='home-card me-2'>
          <h5 className='text-center'>Daily Sales</h5>
          <p className='fw-bold color-blue '>
            {allPrice.reduce((next, curr) => next + curr, 0) + '$'}
          </p>
        </div>
        <div className='home-card me-2'>
          <h5 className='text-center'>Daily Orders</h5>
          <p className='fw-bold color-blue '>
            {allOrders}
          </p>
        </div>
        <div className='home-card me-2'>
          <h5 className='text-center'>Done Orders</h5>
          <p className='fw-bold color-blue '>
            {allDoneOrders?.length}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home