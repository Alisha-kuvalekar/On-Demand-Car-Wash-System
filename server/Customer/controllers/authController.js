const User = require('../models/user');
const jwt = require('jsonwebtoken');


//handle errors
const handleErrors=(err)=>{
    let error= {email:'', password:''};

    //incorrect email
    if(err.message === 'Incorrect email'){
        error.email ="Entered email is not registered";
    }

    //incorrect password
    if(err.message === 'Incorrect Password'){
        error.password ="Entered password is incorrect";
    }

    //duplicate error code
    if(err.code === 11000)
    {
        error.email ='Entered email is already registered';
        return error;
    }

    if(err.message.includes('customers validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}

//Creating JWT Token 
const maxAge = 2 * 24 * 60 * 60;  //token will expire in 2 days
const createToken =(id)=>{
    return jwt.sign({ id }, 'A strong secret token',{
        expiresIn: maxAge
    })
}


//Sign up 
module.exports.get_signup = function(req,res){
    //redirect to sigup page from angular
    res.send("hi this is signnup page");
}

module.exports.post_signup = async function(req,res){
    const {email, password} = req.body;
    try {
        const user = await User.create({email, password});
        const token = createToken(user._id); 
        //res.cookie('jwt',token, {httpOnly: true, maxAge : maxAge*1000}); 
        res.status(201).send({token});
    } catch (error) {
        const err= handleErrors(error);
        res.status(400).json(err);
    }
}


//Login
module.exports.get_login = function(req,res){
    //redirect to login page from angular
    res.send("this is the login page");
}

module.exports.post_login = async function(req,res){
    const {email, password} = req.body;
    try {
      const user = await User.login(email, password);
      const token = createToken(user._id); 
      //res.cookie('jwt',token, {httpOnly: true, maxAge : maxAge*1000}); 
      res.status(201).send({token});
    } catch (error) {
        const err = handleErrors(error);
        res.status(400).json(err);
    }
}

//Log out
module.exports.get_logout = function(req,res){
    res.cookie('jwt','',{maxAge :1});
    //redirect to home page 
    //...
}