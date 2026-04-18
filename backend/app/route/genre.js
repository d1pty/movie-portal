module.exports = (app) => {

    const genre = require('../controller/genre');
    
    // Получение всех типов
    app.get('/api/ListGenres', genre.findAll);
    app.get('/api/genre/:id',genre.findById)
};