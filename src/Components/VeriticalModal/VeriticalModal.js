import React from 'react'
import Modal from 'react-bootstrap/Modal'
import AddForm from '../AddForm/AddForm'
import './VeriticalModal.scss'

const VeriticalModal = ({show, handleModal}) => {
    return (
        <div>
            <Modal
                show={show}
                size="md"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                backdrop='static'
                className='veriticalModal'>
                <Modal.Header className='veriticalModal_header' >
                    <Modal.Title id="contained-modal-title-vcenter " >
                        Add Order
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='veriticalModal_body'>
                    <AddForm handleModal={handleModal} />
                </Modal.Body>
                
            </Modal>
        </div>
    )
}

export default VeriticalModal