import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useGetReservationsQuery } from '../services/reservation';

function Reservations () {
  const navigate = useNavigate()
  const [logedIn, setLogedIn] = useState(sessionStorage.getItem('is-authenticated'))
  const {data, loading, error} = useGetReservationsQuery()

  function logOut (e) {
    e.preventDefault()
    sessionStorage.removeItem('is-authenticated')
    setLogedIn(sessionStorage.getItem('is-authenticated'))
  }

  useEffect(function () {
    if (logedIn !== 'true') navigate('/login')
  }, [logedIn])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <a href="/login" onClick={logOut}>Log out</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main>
        <h1>Resetvations</h1>
        {data}
      </main>
    </>
  );
}

export default Reservations