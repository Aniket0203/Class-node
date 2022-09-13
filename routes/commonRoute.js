const express = require('express');

const Router = express.Router();

const commonC= require('../Controllers/commonControllers')

Router.get('/',commonC.home)
Router.get('/login',commonC.login)
Router.post('/login-action',commonC.loginAction)
Router.post('/register-action',commonC.registerAction)



module.exports=Router;


