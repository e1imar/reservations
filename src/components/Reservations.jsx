import React from 'react'
import NavBarWrapper from './NavBarWrapper'
import ListGroup from 'react-bootstrap/ListGroup'
import MadeRes from './MadeRes'
import { useGetReservationsQuery } from '../services/reservation'

const Reservations = () => {
  const {data, isLoading, error} = useGetReservationsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <>
  <div>{error.status}</div>
  <h1>{error.error}</h1>
  <div>No reservations</div>
  </>
  
  const list = <ListGroup className="d-flex flex-row flex-wrap">
    {data?.map(res => <MadeRes key={res.tableID} {...res}>Cras justo odio</MadeRes>)}
  </ListGroup>

  return <NavBarWrapper>
    <h1 className="mb-3">Reservations</h1>
    {list}
  </NavBarWrapper>
}

export default Reservations