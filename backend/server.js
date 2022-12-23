const express = require('express');
require('dotenv').config();
const btRoutes = require('./routes/bt-routes')



//express app
const app = express();

//***** middleware *****//

// auth router attaches /login, /logout, and /callback routes to the baseURL

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})


//***** routes *****/
app.use(btRoutes)


//listen for requests
app.listen(process.env.PORT, () =>{
    console.log('listening on port', process.env.PORT);
})