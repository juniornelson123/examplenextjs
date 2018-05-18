const express = require('express')
const next = require('next')
const session = require("express-session")
const cookieParser = require("cookie-parser")

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()


app.prepare()
  .then( () => {

    const server = express()

    server.use(cookieParser())

    server.use(session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: true,
      cookie: { secure: false }
    }))

    server.get("*", (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Running in localhost ${port}`)
    })
  })
