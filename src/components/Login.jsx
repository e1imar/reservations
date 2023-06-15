import React, {useState, useEffect} from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import Alert from 'react-bootstrap/Alert'
import { useNavigate } from 'react-router-dom'
import { useLoginQuery } from '../services/reservation'

const Login = () => {
  const navigate = useNavigate(),
  [login, setLogin] = useState(''),
  [password, setPassword] = useState(''),
  [loading, setLoading] = useState(false),
  [error, setError] = useState(null),
  {isSuccess} = useLoginQuery(),

  onSubmit = e => {
    e.preventDefault()
    loginReq()
  },

  loginReq = () => {
    setLoading(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({login, password})
    };

    fetch('/login', requestOptions)
    .then(res => {
      setLoading(false)
      if (!res.ok) throw new Error(res.status)
      else navigate('/')
    })
    .catch(err => setError(err))
  },

  toSignin = e => {
    e.preventDefault()
    navigate('/signin')
  }

  useEffect(() => {
  if (isSuccess) navigate('/')
  }, [isSuccess])

  return <div className="centr">
    <h1 className="mb-4">Log in</h1>
    <Form className="mb-5" onSubmit={onSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Login"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} required/>
      </FloatingLabel>

      <FloatingLabel controlId="floatingPassword" label="Password" className="mb-3">
        <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required/>
      </FloatingLabel>

      {loading && <Alert variant={"info"} className="mb-3">Loading...</Alert>}
      {error && <Alert variant={"danger"} className="mb-3">Incorrect login or password</Alert>}
      

      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
    <p>Not registered yet? <a href='/signin' onClick={toSignin}>Sign in</a></p>
  </div>
}

export default Login;