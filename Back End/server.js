/*
*   Title : main page 
*   Description : it is the root of all functionality . Parent page
*   Date : 22/08/23
*   Author : Anubrata Mallick
*/

// Dependencies
const express = require('express');
const {tempData, sunData, windData, coorData} = require('./CallbackHandler')
const app = express();

// Handle Routing 
app.get('/temp', tempData);
app.get('/wind', windData);
app.get('/sun', sunData);
app.get('/cordinate', coorData);

// Turn the server on 
app.listen(3000, () => console.log('Server started on port 3000'));