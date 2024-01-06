require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/face',(req,res)=>{
    res.send('welcome')
})
app.get('/you',(req,res)=>{
    res.send('<h1>You Tube</h1>')
})
app.get('/face/you',(req,res)=>{s
    res.send('<h2>hello</h2>')
})

app.listen(console.log(process.env), () => {
  console.log(`Example app listening on port ${port}`)
})