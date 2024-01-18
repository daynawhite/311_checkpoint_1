const express = require('express')
const app = express()
const port = process.env.PORT || 4000
const bodyparser = require ('body-parser')

const routes = require('./routes');
app.use('/', routes);


// ??What does this do:
app.get('/', (req, res) => res.send('default route'))


app.listen(port, () => {
  console.log('app is listening on:', port)
})