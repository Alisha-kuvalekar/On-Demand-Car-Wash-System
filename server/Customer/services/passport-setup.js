const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth');

passport.use(
    new GoogleStrategy({
        //options for google strategy
    }),() =>{
        //passport callback
    }
)