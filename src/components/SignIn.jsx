import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Alert from 'react-bootstrap/Alert'
import Modal from 'react-bootstrap/Modal'
import Login from './Login'
import { useNavigate } from "react-router-dom"
import { useCheckLoginQuery, useSigninMutation } from '../services/reservation'

function SignIn() {
  const navigate = useNavigate(),
  [number, setNumber] = useState(''),
  [login, setLogin] = useState(''),
  [pass, setPass] = useState(''),
  [pass2, setPass2] = useState(''),
  [match, setMatch] = useState(pass === pass2),
  [show, setShow] = useState(false),
  {isSuccess: loged} = useCheckLoginQuery(),
  [signinReq, {error, isSuccess}] = useSigninMutation(),

  handleClose = () => setShow(false),
  handleShow = () => setShow(true),

  toLogin = e => {
    e.preventDefault()
    navigate('/login')
  },

  handleSubmit = e => {
    e.preventDefault();
    setMatch(pass === pass2)
    if (pass === pass2) signinReq({login, password: pass, number})
    setNumber('')
    setLogin('')
    setPass('')
    setPass2('')
  },

  modalLogin = <Modal show={show} onHide={handleClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Sucsessfully signed in</Modal.Title>
    </Modal.Header>
    <Login/>
  </Modal>

  useEffect(() => {
    if (loged) navigate('/')
  }, [loged])

  useEffect(() => {
    if (isSuccess) handleShow()
  }, [isSuccess])

  return (
    <div className="centr">
      <h1 className="mb-4">Sign in</h1>
      <Form className="mb-5"  onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="floatingInput"
          label="Phone number"
          className="mb-3"
        >
          <Form.Control type="tel" placeholder="Phone number" value={number} onChange={e => setNumber(e.target.value)} required/>
        </FloatingLabel>

        <FloatingLabel
          controlId="floatingInput"
          label="Login"
          className="mb-3"
        >
          <Form.Control type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} required/>
        </FloatingLabel>

        <FloatingLabel controlId="floatingPassword" label="Password"  className="mb-3">
          <Form.Control type="password" placeholder="Password" value={pass} onChange={e => setPass(e.target.value)} required/>
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Confirm password"  className="mb-3">
          <Form.Control type="password" placeholder="Confirm password" value={pass2} onChange={e => setPass2(e.target.value)} required/>
        </FloatingLabel>
        
        {!match && <Alert variant={"danger"} className="mb-3">Passwords don't match</Alert>}
        {error && <Alert variant={"danger"} className="mb-3">{error.status} {error.data}</Alert>}

        <Button variant="primary" type="submit">
          Sign in
        </Button>
      </Form>

      <p>Already have an account? <a href='/login' onClick={toLogin}>Log in</a></p>
      {modalLogin}
    </div>
  )
}

export default SignIn