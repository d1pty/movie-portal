var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Year = db.year; // название модели смотреть в init-models.js

// Получение всех годов
exports.findAll = (req, res) => {
    Year.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};

exports.findById = (req, res) => {
    Year.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
