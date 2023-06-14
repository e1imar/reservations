import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import { useAddResMutation } from '../services/reservation'

const Table = ({name, date, time, personQ, reserves, id: tableID, tableGroup}) => {
  const [addRes, response] = useAddResMutation(),
  [show, setShow] = useState(false),
  disabled = reserves[date]?.includes(Number(time)),

  handleClose = () => setShow(false),
  handleShow = () => setShow(true),

  handleRes = e => {
    e.preventDefault()
    addRes({date, time, personQ, tableID, tableGroup})
  },

  ConfirmRes = <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>
        {response.isSuccess ? <Alert variant="success">Successfull reserve</Alert> : 'Check details'}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <ul>
        <li>{name}</li>
        <li>For {personQ} {personQ > 1 ? 'persons' : 'person'}</li>
        <li>Date: {date}</li>
        <li>Time: {time}:00</li>
      </ul>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
      <Button variant="primary" onClick={handleRes}  disabled={disabled}>
        Reserve
      </Button>
    </Modal.Footer>
  </Modal>

  return <Card className="d-inline-block" border={response.isSuccess ? "success" : ""}>
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {disabled ? 'Reserved' : "Available"}
      </Card.Text>
      <Button variant="primary" onClick={handleShow} disabled={disabled}>Reserve</Button>
    </Card.Body>
    {ConfirmRes}
  </Card>
}

export default Table