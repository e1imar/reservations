import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Table = ({name, disabled}) => {
  return <Card className="d-inline-block">
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
      </Card.Text>
      <Button variant="primary" disabled={disabled}>Reserve</Button>
    </Card.Body>
  </Card>
}

export default Table