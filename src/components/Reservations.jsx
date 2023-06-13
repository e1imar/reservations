import React from 'react'
import { useGetReservationsQuery } from '../services/reservation'
import NavBarWrapper from './NavBarWrapper'

const Reservations = () => {
  const {data, isLoading, error} = useGetReservationsQuery()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return <NavBarWrapper>
    <h1>Resetvations</h1>
    {data}
  </NavBarWrapper>
}

export default Reservations