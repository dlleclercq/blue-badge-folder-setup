const express = require('express');
const router = express.Router();
const validateSession = require("../middleware/validate-session");
const Log = require("../db").import("../models/log");


router.get('/practice', validateSession, function(req, res)
{
    res.send("This is a practice route!");
});

router.post('/log', validateSession, (req, res) => {
    const logEntry = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
        owner_id: req.user.id
    }
    Log.create(logEntry)
    .then(log => res.status(200).json(log))
    .catch(err => res.status(500).json({error: err}))
});

router.get("/log", (req, res) => {
    Log.findAll()
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
});


router.get('/log/:id', function (req, res) {
    let id = req.params.id;

    Log.findAll({
        where: {id: id}
    })
    .then(logs => res.status(200).json(logs))
    .catch(err => res.status(500).json({error: err}))
});

router.put("/log/:id", validateSession, function (req, res) {
    const updateLogResult = {
        description: req.body.log.description,
        definition: req.body.log.definition,
        result: req.body.log.result,
    };

    const query = { where: { id: req.params.id, owner_id: req.user.id}};

    Log.update(updateLogResult, query)
    .then((logs) => res.status(200).json(logs))
    .catch((err) => res.status(500).json({ error: err}));
});

router.delete("/log/:id", validateSession, function (req, res){
    const query = { where: { id: req.params.id, owner_id: req.user.id}};

    Log.destroy(query)
    .then(() => res.status(200).json({message: "Log Removed"}))
    .catch((err) => res.status(500).json({error: err}));
});

module.exports = router;