const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const destinations = require('./data/destination.json');


app.get('/', (req, res)=> {
    res.send('Travel Guru is Running')
});

app.get('/destinations', (req, res)=> {
    res.send(destinations);
    
})

app.listen(port, ()=> {
    console.log(`Travel Guru is running on port: ${port}`)
})