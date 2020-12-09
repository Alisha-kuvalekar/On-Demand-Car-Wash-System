const { Router } = require('express');
const { requireAuth } = require('../middleware/authMiddleware');
const { washerDetails } = require('../models/readonlydata');
const router = Router();

//Get the leaderboard list
router.get('/findWashers', requireAuth ,function(req,res){
    const { longitude, latitude } = req.body;
    washerDetails.find(
        {
            "addresses.location":
              { $near :
                 {
                   $geometry: { type: "Point",  coordinates: [longitude, latitude] },
                   $minDistance: 500,
                   $maxDistance: 4000
                 }
              }
        },
        function(err,doc){
            if(err){
                res.status(400).json(err);
            } else {
                res.status(200).send(doc);
            }
        }
    )
});