var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Type = db.type; // название модели смотреть в init-models.js

// Получение всех типов
exports.findAll = (req, res) => {
    Type.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
