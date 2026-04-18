var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Genre = db.genre; // название модели смотреть в init-models.js

// Получение всех жанров
exports.findAll = (req, res) => {
    Genre.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
exports.findById = (req, res) => {
    Genre.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
