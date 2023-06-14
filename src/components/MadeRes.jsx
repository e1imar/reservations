import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useDeleteResMutation } from '../services/reservation'

const MadeRes = ({personQ, date, time, id}) => {
  const [show, setShow] = useState(false),
  [delRes] = useDeleteResMutation(),
  formatDate = (date+`-${time-1}-00`).split('-').map(Number),
  [y,mo,d,h,m] = formatDate,
  disabled = new Date() > new Date(y,mo-1,d,h,m),

  handleClose = () => setShow(false),
  handleShow = () => setShow(true),
  handleCancel = () => {delRes(id)},

  CancelModal = <Modal show={show} onHide={handleClose} centered backdrop="static">
    <Modal.Header closeButton>
      <Modal.Title>Canceling reservation</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        <li>For {personQ} {personQ > 1 ? 'persons' : 'person'}</li>
        <li>Date: {date}</li>
        <li>Time: {time}:00</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>Close</Button>
      <Button variant="primary" onClick={handleCancel} disabled={disabled}>Cancel reservation</Button>
    </Modal.Footer>
  </Modal>

  return <Card>
    <Card.Header>
      <Card.Title>Table</Card.Title>
    </Card.Header>
    <Card.Body>
      <ul>
        <li>For {personQ} {personQ > 1 ? 'persons' : 'person'}</li>
        <li>Date: {date}</li>
        <li>Time: {time}:00</li>
      </ul>
      <Button variant="primary" onClick={handleShow} disabled={disabled}>Cancel</Button>
    </Card.Body>
    {CancelModal}
  </Card>
}

export default MadeRes