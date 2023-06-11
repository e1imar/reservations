import './App.css'
import { useRoutes } from 'react-router-dom'
import Reservations from './components/Reservations'
import Login from './components/Login'
import SignIn from './components/SignIn'
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const routes = useRoutes([
    {path: '/', element: <Reservations/>},
    {path: '/login', element: <Login/>},
    {path: '/signin', element: <SignIn/>},
  ])

  return routes
}

export default App