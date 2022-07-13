import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrder } from '../../Redux/features/orderSlice'
import VeriticalModal from '../VeriticalModal/VeriticalModal'
import List from './List'
import './OrderLists.scss'

const OrderList = ({orderInfo}) => {
    const [showModal, setShowModal] = useState(false)
    const { orders } = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchOrder())
    }, [])
    
    const handleModal = (bool) => {
        setShowModal(bool)
    }

    const filterOrder = (status)=>{
        return orders.data.payload?.filter(item=>item.status == status).sort((a,b)=>b.date.split(' ')[1].localeCompare(a.date.split(' ')[1])).map(order => {
            return <List  orderInfo={orderInfo} key={order.id} order={order} /> 
        })
    }

    return (
        <div className='col-4 p-0 order-list'>
            <div>
                <div className='order-list_lists'>
                    <div className='d-flex justify-content-between align-items-center mb-5'>
                        <h4>Order List</h4>
                        <button className='btn add-btn' onClick={() => handleModal(true)}>Add Order </button>
                    </div>

                    {orders.loading
                        ? <div className='text-center mt-5'><span className='spinner-border'></span></div>
                        : [filterOrder(0),filterOrder(1),filterOrder(-1)] }
                    {orders.error != '' && <div><h6>{orders.error}</h6></div>}
                </div>
            </div>
            <VeriticalModal handleModal={handleModal} show={showModal} />
        </div>
    )
}

export default OrderList

