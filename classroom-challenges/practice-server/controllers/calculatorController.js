let router = require('express').Router();


router.post("/add", function(req,res){
    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);

    let total = number1 + number2;

    res.json({total: total});
});

router.post("/sub", function(req,res){
    let subtract1 = +req.body.num1;
    let subtract2 = +req.body.num2;

    let diff = subtract1 - subtract2;

    res.json({diff: diff});
});


module.exports = router;