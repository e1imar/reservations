// src/mocks/handlers.js
import { rest } from 'msw'
import resTables from './resTables'

export const handlers = [
  // rest.post('/login', (req, res, ctx) => {
  //   // Persist user's authentication in the session
  //   sessionStorage.setItem('is-authenticated', 'true')

  //   return res(
  //     // Respond with a 200 status code
  //     ctx.status(200),
  //   )
  // }),

  // rest.get('/user', (req, res, ctx) => {
  //   // Check if the user is authenticated in this session
  //   const isAuthenticated = sessionStorage.getItem('is-authenticated')

  //   if (!isAuthenticated) {
  //     // If not authenticated, respond with a 403 error
  //     return res(
  //       ctx.status(403),
  //       ctx.json({
  //         errorMessage: 'Not authorized',
  //       }),
  //     )
  //   }

  //   // If authenticated, return a mocked user details
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       username: 'admin',
  //     }),
  //   )
  // }),
  
  rest.get('/reserve', (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    return res(
      ctx.status(200),
      ctx.json(resTables),
    )
  }),

  rest.post('/reserve', ({body}, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Not authorized',
        }),
      )
    }

    const currentUser = sessionStorage.getItem('currentUser'),
    currUsersData = localStorage.getItem(currentUser),
    {tableID, tableGroup, date, time} = body,
    reserves = resTables[tableGroup].find(table => table.id === tableID).reserves

    let resInfo
    
    reserves[date] = reserves[date] || []
    if (reserves[date].indexOf(time) >= 0) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: 'Already reserved',
        }),
      )
    }
    else reserves[date].push(time)

    if (currUsersData) {
      resInfo = [...JSON.parse(currUsersData), body]
    }
    else resInfo = [body]
    localStorage.setItem(currentUser, JSON.stringify(resInfo))

    return res(
      ctx.status(200),
      ctx.json(body)
    )
  }),
  
  rest.post('/login', ({body}, res, ctx) => {
    const {login, password} = body,
    savedPassword = JSON.parse(sessionStorage.getItem(login))?.password

    if (savedPassword === password) {
      sessionStorage.setItem('is-authenticated', 'true')
      sessionStorage.setItem('currentUser', login)
      return res(
        ctx.status(200),
      )
    }

    return res(ctx.status(403))
  }),

  rest.post('/signin', ({body}, res, ctx) => {
    if (sessionStorage.getItem(body.login)) return res(ctx.status(403))
    if (body.login && body.password && body.number) {
      const userData = JSON.stringify({password: body.password, number: body.number})
      sessionStorage.setItem(body.login, userData)
      return res(ctx.status(200))
    }

    return res(ctx.status(403))
  }),
]