import './App.css' 
import { useRoutes } from 'react-router-dom'
import Reservations from './components/Reservations'
import Login from './components/Login'
import SignIn from './components/SignIn'
import ResForm from './components/ResForm'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const routes = useRoutes([
    {path: '/', element: <Reservations/>},
    {path: '/login', element: <Login/>},
    {path: '/signin', element: <SignIn/>},
    {path: '/reserve', element: <ResForm/>},
  ])

  return routes
}

export default App