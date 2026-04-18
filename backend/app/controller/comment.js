var db = require('../config/db.config.js');
var globalFunctions = require('../config/global.functions.js');
var Comment = db.comment; // название модели смотреть в init-models.js

// Получение всех комментов
exports.findAll = (req, res) => {
    Comment.findAll()
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
// Добавление коммента
exports.create = (req, res) => {
    Comment.create({
        user_id: req.body.user_id,
        media_id: req.body.media_id,
        comment: req.body.comment,
        rating: req.body.rating
    }).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};
// Обновление данных коммента по id
exports.update = (req, res) => {
    Comment.update({
            user_id: req.body.user_id,
            media_id: req.body.media_id,
            comment: req.body.comment,
            rating: req.body.rating
        },
        {
            where: {
                id: req.params.id
            }
        }
    ).then(object => {
        globalFunctions.sendResult(res, object);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};
// Удаление Коммента по id
exports.delete = (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    }).then(() => {
        globalFunctions.sendResult(res, 'Запись удалена');
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
// Получение коммента по id
exports.findByMediaId = (req, res) => {
    Comment.findAll({
        where: {
            media_id: req.params.media_id,
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};