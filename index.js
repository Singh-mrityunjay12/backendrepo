// console.log("chai and code");
require('dotenv').config()
const express = require('express')
const app = express() //isase ak express ki jitani bhi functionality hoti h sab app me h like get,listen like that
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/Inst',(req,res)=>{
  res.send("Hello, I am Mrityunjay Singh")
})

app.get('/login',(req,res)=>{
  res.send('<h1>Mrityunjay Singh</h1>')

})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})