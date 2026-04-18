var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Country = db.country; // название модели смотреть в init-models.js

// Получение всех стран
exports.findAll = (req, res) => {
    Country.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
exports.findById = (req, res) => {
    Country.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
