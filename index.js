const express = require('express');
const app = express();
const port = 5000;
const mysql = require('mysql');
require('dotenv').config()


app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/views', express.static(__dirname + 'public/views'))



app.set('views', './public/views') 
app.get('/home',(req,res) =>{
  res.sendFile(__dirname + '/public/views/index.html')
})
app.set('views', './public/views') 
app.get('/consulta',(req,res) =>{
  res.sendFile(__dirname + '/public/views/consultaalunos.html')
})
app.set('views', './public/views') 
app.get('/inserir',(req,res) =>{
  res.sendFile(__dirname + '/public/views/inseriralunos.html')
})
app.set('views', './public/views') 
app.get('/login',(req,res) =>{
  res.sendFile(__dirname + '/public/views/login.html')
})

app.listen(port, function(){
    console.log("Listenning on port: " + port)
  })


 /* const connection = mysql.createConnection({
    host:process.env._HOST,
    user:process.env._USERNAME,
    password:process.env._PASSWORD,
    database:process.env._DATABASE,
    port:process.env._PORT
  })
  
  connection.connect(function(err){
    if(err){
        console.log(err)
        throw err
    }
    else{
          console.log('Connected to Database: ' + process.env._DATABASE)
    }
  })
  */