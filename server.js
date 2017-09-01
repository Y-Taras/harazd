require('babel-register')

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const ReactRouter = require('react-router')
const StaticRouter = ReactRouter.StaticRouter
const _ = require('lodash')
const fs = require('fs')
const PORT = process.env.PORT || 8080
const baseTemplate = fs.readFileSync('./index.html')
const template = _.template(baseTemplate)
const App = require('./js/App').default

const server = express()
server.use('/_public', express.static('./_public'))

server.use((req, res) => {
  const context = {}
  const body = ReactDOMServer.renderToString(
    React.createElement(StaticRouter, {location: req.url,
      context: context},
    React.createElement(App))
  )

  res.write(template({body: body}))
  res.end()
})

console.log('listening on port', PORT)
server.listen(PORT)
