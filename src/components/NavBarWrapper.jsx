import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBarWrapper = ({children}) => {
  const [logedIn, setLogedIn] = useState(sessionStorage.getItem('is-authenticated')),
  navigate = useNavigate(),

  logOut = e => {
    e.preventDefault()
    sessionStorage.removeItem('is-authenticated')
    setLogedIn(sessionStorage.getItem('is-authenticated'))
  },
  toRes = e => {
    e.preventDefault()
    navigate('/')
  },
  toMakeRes = e => {
    e.preventDefault()
    navigate('/reserve')
  }

  useEffect(function () {
    if (logedIn !== 'true') navigate('/login')
  }, [logedIn])

  return <>
    <Navbar>
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="/" onClick={toRes}>Reservations</Nav.Link>
          <Nav.Link href="/reserve" onClick={toMakeRes}>Reserve</Nav.Link>
        </Nav>
        {/* <Navbar.Toggle /> */}
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