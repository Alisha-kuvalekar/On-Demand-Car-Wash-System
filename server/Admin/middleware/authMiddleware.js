const jwt = require('jsonwebtoken');


//Used to jwt check token and guard pages
const requireAuth = (req, res, next)=>{
    const token = req.cookies.jwt;

    //Check if JWT exists and is valid
    if(token){
        jwt.verify(token,'Admin is the superuser',(err, decodedToken)=>{
            if(err){
                console.log(err.message);
                //redirect to login maybe
            }else{
                console.log(decodedToken);
                next();
            }
        });
    }
    else{
        res.redirect('/api/login');
    }

};

module.exports ={ requireAuth }; 