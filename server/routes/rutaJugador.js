const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
var cors = require('cors')
// Connect
const connection = (callback) => {
    const postConeccion = (err, client) => {
        if (err) return console.log(err);
        let db = client.db('club');
        callback(db)
    }
    return MongoClient.connect('mongodb://localhost:27017/club', postConeccion);
};
router.use(cors())
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
// Get GastosMicros
router.get('/gastomicro', (req, res) => {
    const miFuncion = (db) => {
        db.collection('gastomicro')
            .find()
            .toArray()
            .then((gastomicro) => {
                response.data = gastomicro;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    };
    connection(miFuncion);
});

//Get GastosGenerales
router.get('/gastosgenerales', (req, res) => {
    const miFuncion = (db) => {
        db.collection('gastosgenerales')
            .find()
            .toArray()
            .then((gastosgenerales) => {
                response.data = gastosgenerales;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    };
    connection(miFuncion);
});

//Get TelefonosUtiles
router.get('/telefonos', (req, res) => {
    const miFuncion = (db) => {
        db.collection('telefonosutiles')
            .find()
            .toArray()
            .then((telefonosutiles) => {
                response.data = telefonosutiles;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    };
    connection(miFuncion);
});

//Get ArbitrosMedicos
router.get('/arbitrosmedicos', (req, res) => {
    const miFuncion = (db) => {
        db.collection('arbitrosmedicos')
            .find()
            .toArray()
            .then((arbitrosmedicos) => {
                response.data = arbitrosmedicos;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    };
    connection(miFuncion);
});

//Get sponsors
router.get('/sponsors', (req, res) => {
    const miFuncion = (db) => {
        db.collection('sponsors')
            .find()
            .toArray()
            .then((sponsors) => {
                response.data = sponsors;
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
router.post('/jugador', (req, res) => {
    const miFuncion = (db) => {
        db.collection('jugador')
        .then((jugador) => {
            response.data = juugador;
            res.json(response);
        })
        .catch((err) => {
            sendError(err, res);
        });
    };
    res.json({mensaje: "Holaa putito"});
    connection(miFuncion);
});

// Saludar por POST
//router.get('/saluda', (req, res) => {
//    res.json({mensaje: "Holaa trolita"});
//});

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