var db = require('../config/db.config.js');
const { Op } = require('sequelize');
var globalFunctions = require('../config/global.functions.js');
var Media = db.media; // название модели смотреть в init-models.js
var Genre = db.genre;

// Получение всех медиа
exports.findAll = (req, res) => {
    // Получение параметров страницы из запроса
    const page = parseInt(req.query.page) || 1; // По умолчанию страница 1
    const pageSize = 20; // По умолчанию 20 записей на странице
    // Вычисление смещения для правильного запроса к бд
    const offset = (page - 1) * pageSize;
    Media.findAll({
        limit: pageSize,
        offset: offset,
    })
        .then(objects => {
            globalFunctions.sendResult(res, objects);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        });
};
exports.findByType = (req, res) => {
    // Получение параметров страницы из запроса
    const page = parseInt(req.query.page) || 1; // По умолчанию страница 1
    const pageSize = 20; // По умолчанию 20 записей на странице
    // Вычисление смещения для правильного запроса к бд
    const offset = (page - 1) * pageSize;
    Media.findAll({
        limit: pageSize,
        offset: offset,
        where: {
            type_id: req.params.type_id
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};
// Получение данных  по id
exports.findById = (req, res) => {
    Media.findByPk(req.params.id)
        .then(object => {
            globalFunctions.sendResult(res, object);
        })
        .catch(err => {
            globalFunctions.sendError(res, err);
        })
};
exports.findByTitle = (req, res) => {
    Media.findAll({
        where: {
            type_id: req.params.type_id,
            title: {
                [Op.like]: `%${req.query.title || req.params.title}%`
            }
        }
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    });
};
exports.findByGenre = (req, res) => {
    const page = parseInt(req.query.page) || 1; // По умолчанию страница 1
    const pageSize = 20; // По умолчанию 20 записей на странице
    // Вычисление смещения для правильного запроса к бд
    const offset = (page - 1) * pageSize;
    Media.findAll({
        limit: pageSize,
        offset: offset,
        include: [
            {
                model: Genre,
                as: 'genre',
                where: {
                    name: {
                        [Op.like]: `%${req.params.name}%`
                    }
                },
                attributes: []
            },
        ]
    }).then(objects => {
        globalFunctions.sendResult(res, objects);
    }).catch(err => {
        globalFunctions.sendError(res, err);
    })
};