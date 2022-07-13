import React from 'react'

const List = ({order, orderInfo}) => {
    const { table, date, totalPrice, waiter, status } = order

    return (
        <div className='list d-flex justify-content-between align-items-center list' onClick={(e)=>orderInfo(order,e)}>
            <div className='d-flex flex-column justify-content-between'>
                <h6>Table: {table}</h6>
                <p className='date d-flex flex-column'><span>{date}</span>
                  {status == 0 && <span className='text-danger fw-bold'>Pending</span>}
                  {status == 1 && <span className='color-blue fw-bold'>Done</span>}
                  {status == -1 && <span className='text-danger fw-bold'>Canceled</span>}
                  </p>
            </div>
            <div className='small'>{waiter}</div>
            <div>
                <p className='small m-0'>{totalPrice}$</p>
            </div>
        </div>
    )
}

export default List