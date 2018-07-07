const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
//   .all('/images/*', (req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     next();
//   })
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
  .get('/', (req, res) => res.sendFile(path.join(__dirname + '/bot.js')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
