const express = require('express')
const app = express()
const port = process.env.PORT || 4000

const routes = require('./routes/users.js');

// Very important to have this before routes:
app.use(express.json())

app.use(routes);

app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})