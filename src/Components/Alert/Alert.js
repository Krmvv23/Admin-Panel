import React from 'react'
import './Alert.scss'
import { useSelector,useDispatch } from 'react-redux'
import { hide } from '../../Redux/features/alertSlice'

const Alert = () => {
    const { showAlert } = useSelector(state => state)
    const dispatch = useDispatch()
    showAlert.show && setTimeout(() => {
        dispatch(hide(false))
    }, 2000);
    return (
        <div className={`Alert ${showAlert.show && ' show-alert'}` }>
            <h5 className='m-0'> Success Process </h5>
        </div>
    )
}

export default Alert