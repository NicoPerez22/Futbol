const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (callback) => {
    const postConeccion = (err, client) => {
        if (err) return console.log(err);
        let db = client.db('club');
        callback(db)
    }
    return MongoClient.connect('mongodb://localhost:27017/club', postConeccion);
};

// Get Jugadores
router.get('/jugador', (req, res) => {
    const miFuncion = (db) => {
        db.collection('jugador')
            .find()
            .toArray()
            .then((jugador) => {
                response.data = jugador;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    };
    connection(miFuncion);
});

// Get Silva
router.get('/silva', (req, res) => {
    const miFuncion = 
    connection(miFuncion);
});

// Saludar por POST
//router.post('/saluda', (req, res) => {
  //  res.json({mensaje: "Holaa putito"});
//});

// Saludar por POST
router.get('/saluda', (req, res) => {
    res.json({mensaje: "Holaa trolita"});
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

module.exports = router;