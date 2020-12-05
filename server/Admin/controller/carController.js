const car = require('../models/car');


//handling errors
const handleErrors=(err)=>{
    let error= {
        name: '',
        model: '',
        status : ''
    };

    //duplicate service plan name
    if(err.code === 11000)
    {
        error.model ='Entered car model is already present';
        return error; 
    }

    if(err.message.includes('car validation failed'))
    {
        Object.values(err.errors).forEach(({properties})=>{
            error[properties.path] = properties.message;  
        })
    }
    return error;
}


//Route handlers

//GET all cars details
module.exports.get_cars = function(req,res){
    car.find({},function(err,docs){
        if(err){
            res.status(400).json(err);
        }else {
            res.status(201).send(docs);
        }
    })
};

//GET a specific car details
module.exports.get_car = function(req,res){
    const id = req.params.id;
    car.findById(id,function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }else {
            res.status(201).send(doc);
        }
    });
};

//POST(create) new car
module.exports.post_cars = async function(req,res){
    const carDetails = req.body;
    try {
        const newCar = await car.create(carDetails);
        res.status(400).send(newCar);
    } catch (error) {
        const err= handleErrors(error);
        res.status(400).json(err); 
    } 
};

//PUT(update) a car details
module.exports.put_cars =function(req,res){
    const id = req.params.id;
    const updatedCar = req.body;
    car.findByIdAndUpdate(id, updatedCar, {new:true} , function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).send(doc);
        }
    })
};

//DELETE a car
module.exports.delete_cars = function(req,res){
    const id = req.params.id;
    car.findByIdAndDelete(id, function(err,doc){
        if(err){
            console.log(err);
            res.status(400).json(err);
        }
        else{
            res.status(201).send("Document deleted successfully");
        }
    })
};