const createPostObject = function(req, files){
    
    console.log(req);
    var name = req.name;
    var mobile = req.mobile;
    var cars = [];
    var addresses =[];
    req.cars.forEach(car => {
        files.forEach(file => {
            cars.push({
                carName  : car.carName,
                carModel : car.carModel,
                carImage : file.path 
            })
        });  
    });
    req.addresses.forEach(element => {
        addresses.push({
            houseDetails : element.houseDetails,
            city : element.city,
            state : element.state,
            zipcode : element.zipcode 
        })
    }); 
    
    return details = {
        name,
        mobile,
        cars,
        addresses
    }
    
}


module.exports = { createPostObject };