const express = require('express');
const path = require('path');
const app = express();
const port = 9810;

app.use(express.static(__dirname))

app.get('/', (req, response)=>{
response.sendFile(path.join(__dirname+'/index.html'))//variabile pronta che ci dice dove andare _dirname
})

app.listen(port, ()=>{
    console.log('IL SERVER è PARTITO!')
})