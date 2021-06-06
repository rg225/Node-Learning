const path = require('path');
const express = require('express');


const app = express();
const publicPath = path.join(__dirname,'../public');

app.use(express.static(publicPath));


// app.get('/', (req, res)=>{
//     res.send('Home Page');
// })

// app.get('/about', (req, res)=>{
//     res.send('About Page');
// })

// app.get('/help', (req, res)=>{
//     res.send('Help Page');
// })

app.listen(3000, () => {
    console.log('I am on tha port 3000');
})