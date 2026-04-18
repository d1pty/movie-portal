module.exports = (app) => {

    const comment = require('../controller/comment');
    
    // Получение всех типов
    app.get('/api/comments', comment.findAll);
    // Добавление Коммента
    app.post('/api/addComment', comment.create);

    // Обновление коммента по id
    app.post('/api/updateComment/:id', comment.update);

    // Удаление коммента по id
    app.post('/api/deleteComment/:id', comment.delete);

    // Получение коммента по id
    app.get('/api/comment/:media_id', comment.findByMediaId);
};