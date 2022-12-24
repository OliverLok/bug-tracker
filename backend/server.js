const express = require('express');
require('dotenv').config();
const btRoutes = require('./routes/bt-routes')
const mongoose = require('mongoose');
const e = require('express');


//express app
const app = express();

//***** middleware *****//

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


//***** routes *****/
app.use(btRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => { 
        //listen for requests once connected to db
        app.listen(process.env.PORT, () =>{
        console.log('connected to db and listening on port', process.env.PORT);
    })
    })
    .catch((error) =>{
        console.log(error)
    })


