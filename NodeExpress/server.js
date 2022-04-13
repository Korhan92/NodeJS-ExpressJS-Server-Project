const express = require('express');

const app = express();

app.get('/', (request, response)=>{
  response.send('Hello World')
})

app.get('/contact', function(req, res){
  res.send('Constact me at mahriaa88@gmail.com')
})

app.get('/about', function(req, res){
  res.send('My name is Mahri. I love code')
  //res.end('My name is Mahri. I love code')
})

app.get('/hobbies', function(req, res){
  res.send('<ul class="dd">',
  '<li>coffee</li><li>code</li><li>travel</li></ul>')
})


app.get('/friends', function(req, res){
  res.json(["Tony","Lisa","Michael","Ginger"]);
})


app.get('/about', function(req, res){
  res.send('My name is Mahri. I love code')
  //res.end('My name is Mahri. I love code')
})


app.listen(3000, function(){
  console.log('server started on port 3000')
})