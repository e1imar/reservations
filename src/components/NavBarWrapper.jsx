import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { useCheckLoginQuery } from '../services/reservation'

const NavBarWrapper = ({children}) => {
  const {error} = useCheckLoginQuery({ refetchOnMountOrArgChange: true }),
  navigate = useNavigate(),
  [auth, setAuth] = useState(true),

  logOut = e => {
    e.preventDefault()
    sessionStorage.removeItem('is-authenticated')
    setAuth(false)
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
    if (error || !auth) navigate('/login')
  }, [error, auth])

  return error ? <div>redirecting...</div> : <div>
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
  </div>
}

export default NavBarWrapper