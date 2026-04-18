module.exports = (app) => {

    const country = require('../controller/country');
    
    // Получение всех типов
    app.get('/api/countries', country.findAll);
    app.get('/api/country/:id',country.findById)
};