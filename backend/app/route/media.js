module.exports = (app) => {

    const media = require('../controller/media');
    
    // Получение всех типов
    app.get('/api/ListMedias/', media.findAll);
    app.get('/api/ListMedias/:type_id', media.findByType);
    app.get('/api/media/genre/:name', media.findByGenre);
    // поиск всей инфы по id
    app.get('/api/media/:id', media.findById);
    // поиск по названию фильма и id
    app.get('/api/media/title/:title/:type_id', media.findByTitle);
};