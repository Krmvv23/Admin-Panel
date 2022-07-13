import { Formik, Field, Form, FieldArray } from 'formik';
import { useSelector } from 'react-redux';
import { RiDeleteBin7Line } from 'react-icons/ri'
import { useDispatch } from 'react-redux';
import { fetchOrder } from '../../Redux/features/orderSlice';
import axios from 'axios';
import moment from 'moment'
import './AddForm.scss'
import { show } from '../../Redux/features/alertSlice';

const initialValues = {
    id: 0,
    food: [
        {
            name: '',
            price: 0,
            count: 1
        },
    ],
    waiter: '',
    table: '',
    totalPrice: 0,
    date: 0,
    status: 0
};

const AddForm = ({ handleModal }) => {
    const { foods, orders } = useSelector(state => state)
    const dispatch = useDispatch()
   

    const validateInput = (value) => {
        let error;
        if (!value) {
            error = 'Required';
        }
        return error;
    }
    return (
        <div className='AddForm'>
            <Formik
                initialValues={initialValues}
                onSubmit={async (values) => {
                    const allPrice = []
                    values.food.map(item => allPrice.push(item.price * item.count))
                    values.totalPrice = allPrice.reduce((next, curr) => {
                        return next + curr
                    })
                    values.date = moment().format('DD/MM/YYYY hh:mm:ss a')
                    values.id = orders.data.payload.length + 1
                    await axios.post('http://localhost:8000/orders', values)
                    dispatch(fetchOrder())
                    dispatch(show(true))
                    handleModal(false)
                }}>
                {({ values, errors, touched }) => (
                    <Form>
                        <FieldArray name="food">
                            {({ insert, remove, push }) => (
                                <div className='mb-3'>
                                    {values.food.length > 0 &&
                                        values.food.map((food, index) => (
                                            <div className="row mb-2" key={index}>
                                                <div className="col-8 d-flex">
                                                    <div className='w-100'>
                                                        <Field validate={validateInput} className='w-100' onInput={(e) => foods.data.payload.filter(item => item.name == e.target.value).map(item => values.food[index].price = item.price)} name={`food.${index}.name`} as="select">
                                                            <option defaultChecked>Select Food</option>
                                                            {
                                                                foods.data.payload?.map((item, i) => {
                                                                    return (
                                                                        <option key={item.id}>
                                                                            {item.name}
                                                                        </option>
                                                                    )
                                                                })
                                                            }
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className='col-3'>
                                                    <Field validate={validateInput} onInput={e => { if (e.target.value <= 0) { e.target.value = 1 } }} as='input' type='number' name={`food.${index}.count`} className='ms-2 w-100 text-center' />
                                                </div>
                                                <div className="col col-1 d-flex align-items-center  px-0">
                                                    <button
                                                        type="button"
                                                        className="remove-btn"
                                                        onClick={() => remove(index)}>
                                                        <RiDeleteBin7Line />
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    <button
                                        type="button"
                                        className="add-btn  "
                                        onClick={() => push({ name: '', price: 0 })}>
                                        Add+
                                    </button>
                                </div>
                            )}
                        </FieldArray>
                        <div className='row mb-3'>
                            <div className='col mb-2'>
                                <Field validate={validateInput} as='input' className='w-100' name='waiter' placeholder='Waiter' />
                                {touched.waiter && errors.waiter && <div className='text-danger small'>Waiter is Required</div>}
                            </div>
                            <div className='col'>
                                <Field validate={validateInput} as='input' className='w-100' name='table' placeholder='Table' />
                                {touched.table && errors.table && <div className='text-danger small'>Table is Required</div>}
                            </div>
                        </div>

                        <div className='text-end'>
                            <button className='btn close-btn border-0 mt-1 me-2' type='button' onClick={() => handleModal(false)} >Close</button>
                            <button type="submit" className='btn submit-btn'>Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
};

export default AddForm