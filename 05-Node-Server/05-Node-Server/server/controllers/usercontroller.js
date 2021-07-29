// let express = require('express');
// let router = express.Router();
// let sequelize = require('../db');
// let User = sequelize.import('../models/user.js');



const router = require('express').Router();
const User = require('../db').import('../models/user.js');
router.post('/create', function(req, res){
    let userModel = {
        email: req.body.user.email,
        password: "Password1234"
    };
    User.create(userModel).then(
        function(user){
            let responseObject = {
                user: user,
            };
            res.json(responseObject);
        })
        .catch(function(err){
            res.status(500).json({error: err});
        });

        router.post('/login', function(req, res) {

        });
});

router.post("/logn", function(req, res){
    User.findone({where: {email: "test4@testsdfdsfasd.com"}})
    .then(function(user){
        res.json({user: user});
    });
});
module.exports = router;