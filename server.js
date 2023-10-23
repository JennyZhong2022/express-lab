const express = require('express')
const path = require('path');
const students=require('./data/students-db')

const app = express()

app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))




app.get('/students', (req,res) => {
  res.render('students', {
    students:students.getAll()
  })
})

app.get('/students/:id', (req, res) => {
  console.log(students.getOne(req.params.id));
  res.render('show',{student:students.getOne(req.params.id)})
})

app.listen(3000, ()=>{
  console.log('server is listening 3000');
})