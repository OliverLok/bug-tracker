const express = require('express');
// const { auth } = require('express-openid-connect');
const router = express.Router();
const createTicket = require('../models/ticket-models')

//openID stuff
// const config = {
//     authRequired: false,
//     auth0Logout: true,
//     secret: process.env.SECRET,
//     baseURL: process.env.BASEURL,
//     clientID: process.env.CLIENTID,
//     issuerBaseURL: process.env.ISSUER
// };

// // auth router attaches /login, /logout, and /callback routes to the baseURL
// router.use(auth(config))

//home page 
router.get('/',(req, res) => {
    // console.log(req.oidc.isAuthenticated())
    res.json({msg: 'Welcome to the app'})
})

//log in
router.get('/login', (req, res) => {
    res.json({msg: 'Login page'})
})

// GET a single ticket
// DELETE a ticket
router.get('/:id', (req, res) => {
    res.json({msg: 'GET a single ticket'})
})

// POST a new ticket
router.post('/', async (req, res) => {
    const {title, titleDescription} = req.body
    try{
        const ticket = await createTicket.create({title, titleDescription})
        res.status(200).json(ticket)
    }catch(error){
        res.status(400).json({error: error.message})
    }
    res.json({msg: 'POST a new ticket'})
})

// DELETE a ticket
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a ticket'})
})

// UPDATE a ticket
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a ticket'})
})

module.exports = router