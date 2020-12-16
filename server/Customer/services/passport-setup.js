const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys  = require('../../config');
const User = require('../models/googleAuthUsers');

passport.use(
    new GoogleStrategy({
        //options for google strategy
        callbackURL :'/api/google/redirect',
        clientID :keys.google.clientID,
        clientSecret : keys.google.clientSecret

    },(accessToken , refreshToken, profile, done) =>{
        //passport callback
        User.findOne({googleId : profile.id}).then((currentUser) =>{
            if(currentUser){
                //already have the user
                console.log('User is:' +currentUser)
            } else {
                //if not create the user
                new User({
                    username : profile.displayName,
                    googleId : profile.id
                }).save().then((newUser) => {
                    console.log("new user created")
                })
            }
        })

    })
)