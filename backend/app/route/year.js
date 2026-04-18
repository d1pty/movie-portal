module.exports = (app) => {

    const year = require('../controller/year');
    
    // Получение всех типов
    app.get('/api/years', year.findAll);
    app.get('/api/year/:id',year.findById)
};