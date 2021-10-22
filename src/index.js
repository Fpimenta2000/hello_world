const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/health', (req, res) => {
  res.send('Service is available')
})

app.post('/save', (req,res) => {
  console.log(req)
  res.end()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
