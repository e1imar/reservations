import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Tables from './Tables'
import Alert from 'react-bootstrap/Alert'
import NavBarWrapper from './NavBarWrapper'

const ResForm = () => {
  const newDate = new Date(),
  today = newDate.toISOString().split('T')[0],
  timeNow = newDate.toLocaleTimeString([], { hour: '2-digit'}),
  inputTime = timeNow >= 12 ? (Number(timeNow) + 1) : 12,

  [date, setDate] = useState(today),
  [time, setTime] = useState(inputTime),
  [personQ, setPersonQ] = useState(1),

  startTime = date === today ? inputTime : 12,
  isPastDate = new Date(date) < new Date (today)

  let timeOptions = [], personOptions = []

  for (let index = startTime; index <= 22; index++) {
    timeOptions.push(<option key={index} value={index}>{index}:00</option>)
  }
  for (let index = 1; index <= 6; index++) {
    personOptions.push(<option key={index} value={index}>{index}</option>)
  }

  return <NavBarWrapper>
    <h1 className="mb-3">Reserve a table</h1>
    <Form className="mb-3">
      <Form.Group className="mb-3 me-4 d-inline-block">
        <Form.Label>Date:</Form.Label>
        <Form.Control type="date"  min={today} value={date} onChange={e => setDate(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3 me-4 d-inline-block">
        <Form.Label>Time:</Form.Label>
        <Form.Select min={inputTime} value={time} onChange={e => setTime(Number(e.target.value))} disabled={isPastDate}>
          {timeOptions}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3 me-4 d-inline-block">
        <Form.Label>Persons:</Form.Label>
        <Form.Select onChange={e => setPersonQ(e.target.value)} value={personQ} disabled={isPastDate}>
          {personOptions}
        </Form.Select>
      </Form.Group>
    </Form>
    {isPastDate ? <Alert variant="warning">Choose correct date</Alert> : <Tables personQ={personQ} time={time} date={date}/>}
  </NavBarWrapper>
}

export default ResForm