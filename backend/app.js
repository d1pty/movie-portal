var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var db = require('./app/config/db.config.js'); // подключение настроек базы данных

db.sequelize.sync({force: false}); // force обозначает автоматическое создание таблиц в базе данных при запуске проекта

app.listen(3000);
var cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:4200', // указываем, откуда будут приходить запросы
    credentials: true, // разрешаем обрабатывать запросы
    optionSuccessStatus: 200 // при успешной обработке запроса будет возвращён статус 200
};
app.use(cors(corsOptions));
var type = require('./app/route/type');
type(app);
var country = require('./app/route/country');
country(app);
var genre = require('./app/route/genre');
genre(app);
var year = require('./app/route/year');
year(app);
var media = require('./app/route/media');
media(app);
var comment = require('./app/route/comment');
comment(app);
var user = require('./app/route/user');
user(app);
var auth = require('./app/route/auth.js');
auth(app);