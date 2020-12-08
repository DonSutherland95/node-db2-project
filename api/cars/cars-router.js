const express = require('express');

const db = require('../../data/dbConfig')

const router = express.Router();

router.get('/', (req, res)=>{
    db('cars')
        .then(cars=>{
            res.json(cars)
        })
        .catch(err=>{
            res.status(500).json({errorMessage: err.message})
        })
})

router.post('/', (req, res)=>{
    const entry = req.body
    db('cars').insert(entry)
        .then(ids=>{
            return db('cars').where({id: ids[0]});
        })
        .then(newCarEntry=>{
            res.status(201).json(newCarEntry)
        })
        .catch(err=>{
            console.log('POST error', err);
            res.status(500).json({message: "Failed to store data"})
        })
})

module.exports = router;