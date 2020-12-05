const createPostObject = function(req, files){
    
    console.log(req);
    var name = req.name;
    var mobile = req.mobile;
    var profilePicture = files[0].path;
    var addresses =[];
    req.addresses.forEach(element => {
        addresses.push(element);
    }); 
    
    return details = {
        name,
        mobile,
        profilePicture,
        addresses
    }
    
}


module.exports = { createPostObject };