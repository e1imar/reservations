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
  
  rest.post('/login', ({body}, res, ctx) => {
    const savedPassword = JSON.parse(sessionStorage.getItem(body.login))?.password
    if (savedPassword === body.password) {
      sessionStorage.setItem('is-authenticated', 'true')
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