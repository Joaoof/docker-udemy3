const express = require("express");
const app = express(); 
const port = 3000

app.get('/', (req, res) => {
    res.send('Olá minha imagem')
})

app.post('/postc', function (req, res) {
    res.send('POST request to the homepage');
  });
  
app.listen(port, () => {
    console.log(`execute in port: ${port}`)
})