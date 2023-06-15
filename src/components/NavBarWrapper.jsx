import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useCheckLoginQuery, useLoginMutation } from '../services/reservation'
import { reservationApi } from '../services/reservation'

const NavBarWrapper = ({children}) => {
  const {error, isLoading, refetch} = useCheckLoginQuery(),
  navigate = useNavigate(),

  logOut = e => {
    e.preventDefault()
    sessionStorage.removeItem('is-authenticated')
    refetch()
  },
  toRes = e => {
    e.preventDefault()
    navigate('/')
  },
  toMakeRes = e => {
    e.preventDefault()
    navigate('/reserve')
  }

  useEffect(() => {
    if (error) navigate('/login')
  }, [error])

  if (error) return <div>redirecting...</div>
  if (isLoading) return <div>loading...</div>
  
  return <>
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/" onClick={toRes}>Reservations</Nav.Link>
          <Nav.Link href="/reserve" onClick={toMakeRes}>Reserve</Nav.Link>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <a href="/login" onClick={logOut}>Log out</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <main>{children}</main>
  </>
}

export default NavBarWrapper