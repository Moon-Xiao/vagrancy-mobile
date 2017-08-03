process.env.NODE_ENV = 'dev'
process.env.MOCK_USER = 'dev'
process.env.METHOD = 'SERVER'
process.env.RENDER = 'de'

const service = require('core-service')

const User = require('./model/User')

require('./model/Region')
require('./model/Product')
require('./model/Album')
require('./model/Photo')
require('./model/Post')
require('./model/Category')
require('./model/Scene')
require('./model/Group')
const Admin = require('./model/Admin')
const Post = require('./model/Post')
const path = require('path')
// //
// //


// 10.25.19.193

//
const cms = require('cms')
//
service.use(cms)
// //

if (process.env.RENDER === 'dev') {
  const frontApp = require('./build/dev-server')
  service.post('prepare', function (app) {
    app.use('/', frontApp)
  })
} else {
  service.post('prepare', function (app) {
    app.use('/', require('express').static('./dist'))
    app.use('/*', function (req, res) {
      res.sendFile(path.join(__dirname, 'dist/index.html'))
    })
  })
}

service.start()
// .then(() => {
//   return Admin.model.count()
//     .then(count => {
//       if (count === 0) {
//         return Admin.model.insertTopToBottom({
//           email: 'test@jagger.tech',
//           password: '1234'
//         })
//       }
//     })
// })
  .catch(console.error)
