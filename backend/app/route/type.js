module.exports = (app) => {

    const type = require('../controller/type');
    
    // Получение всех типов
    app.get('/api/types', type.findAll);
};