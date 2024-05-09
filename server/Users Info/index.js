// Importing local files
const UserModel = require('./models/Users')

// Accessing Express and MongoDB Packages
const express = require('express')
const mongoose = require('mongoose')

const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())



// Connecting MongoDB DataBase
mongoose.connect('mongodb://localhost:27017/UsersInfo')
.then(()=>console.log("MongoDB Connected."))
.catch(err => console.log("Mongo Error" + err))

//CRUD OPERATIONS
// Creating User
app.post("/UsersInfo/createUser", (req, res)=>{
  UserModel.create(req.body)
  .then(users=> res.json(users))
  .catch(err=> res.json(err))
})

// Reading User
app.get('/UsersInfo', (req, res)=>{
  UserModel.find({})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Updating User
app.get('/UsersInfo/getUser/:id', (req, res) => {
  const id = req.params.id;

  UserModel.findById({_id:id})
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

app.put('/UsersInfo/updateUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndUpdate({_id: id}, {
    name: req.body.name,
    email: req.body.email,
    age: req.body.age
  })
  .then(users => res.json(users))
  .catch(err => res.json(err))
})

// Deleting User
app.delete('/UsersInfo/deleteUser/:id', (req, res) => {
  const id = req.params.id;
  UserModel.findByIdAndDelete({_id: id})
  .then(res => res.json(res))
  .catch(err => res.json(err))
})


// Starting the server
app.listen(5000, ()=>{
  console.log("Server is running on port 5000.");
})