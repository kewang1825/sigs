var express = require('express')
var app = express()
var fs = require('fs')
var https = require('https')

const port = 3000

app.use('/', express.static('./dist', {
  index: "index.html"
}))

https.createServer({
  key: fs.readFileSync('./server/server.key'),
  cert: fs.readFileSync('./server/server.cert')
}, app)
.listen(port, () => console.log(`sigs-dev-webchat app listening on port ${port}!`))
