const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('<h1 style="color:green; text-align:center">The server is running successfully</h2>')
})


app.get('/api/students', (req,res)=>{
  fs.readFile('./db.json', 'utf-8', (error, data)=>{
    const students =JSON.parse(data).students
    console.log(students);
    res.send(students)
  })
})

app.post('/api/students', (req, res)=>{
  console.log(req.body);
  res.send("Data Send")
})

app.listen(port, () => {
  console.log(`Server is Running On PORT: ${port}`)
})