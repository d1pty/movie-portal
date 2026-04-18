var dbProperties = {
    database: 'movierating', // название базы данных
    username: 'root', // имя пользователя, для которого настроены права к базе данных, 'root' задаётся по умолчанию
    password: '', // пароль пользователя, по умолчанию пароль пустой
    host: 'localhost', // имя сервера, на котором расположена база данных
    dialect: 'mysql', // используемая СУБД
    pool: { // параметры соединения
        max: 5, // максимальное количество одновременно открытых соединений
        min: 0, // минимальное количество соединений
        acquire: 30000, // максимальное время в миллисекундах, в течение которого пул (набор соединений к БД) будет пытаться установить соединение, прежде чем выдаст ошибку
        idle: 10000 // время в миллисекундах, в течение которого соединение может простаивать, прежде чем оно будет удалено
    }
};

var Sequelize = require('sequelize');
var sequelize = new Sequelize(
    dbProperties.database, dbProperties.username, dbProperties.password,
    {
        host: dbProperties.host,
        dialect: dbProperties.dialect,
        operatorsAliases: false,
        pool: {
            max: dbProperties.max,
            min: dbProperties.pool.min,
            acquire: dbProperties.pool.acquire,
            idle: dbProperties.pool.idle
        },
        define: {
            // имена таблиц не будут создаваться автоматически во множественном числе
            freezeTableName: true,

            // запрет на автоматическое создание полей createdAt и updatedAt (эти поля по умолчанию создаются ORM Sequalize во всех таблицах, при желании можете включить эту настройку)
            timestamps: false
        }
    }
);

// Подключение моделей
var init_models = require('../model/init-models');
var db = init_models.initModels(sequelize);

db.sequelize = sequelize;

// const API_KEY = "d7d996d1-30d0-46b7-bf4b-b03af85dcb92";
// const API_URL_POPULAR =
//   "https://kinopoiskapiunofficial.tech/api/v2.2/films?order=RATING&type=ALL&ratingFrom=7&ratingTo=10&yearFrom=1000&yearTo=3000&page=5";
// const API_URL_ID =
//   "https://kinopoiskapiunofficial.tech/api/v2.2/films/";

// getMovies(API_URL_POPULAR);
// async function getMovies(url) {
//     const resp = await fetch(url, {
//       headers: {
//         "Content-Type": "application/json",
//         "X-API-KEY": API_KEY,
//       },
//     });
//     const respData = await resp.json();
//     for (const movie of respData.items) {
//         // Ждем выполнения перед переходом к следующему фильму (фиксит баг)
//       const apiId = `${API_URL_ID}${movie.kinopoiskId}`;
//       await getFull(apiId);
//     }
// }
// async function getFull(url) {
//     const resp = await fetch(url, {
//         headers: {
//           "Content-Type": "application/json",
//           "X-API-KEY": API_KEY,
//         },
//       });
//       const newData = await resp.json();
//       await processMovie(newData);
//   }
  
// async function processMovie(movie) {
//      // Записываем в БД год фильма
//     const mediaYear = await db.year.findOrCreate({
//       where: {
//         year: movie.year
//       },
//       defaults: {
//         year: movie.year
//       }
//     });
//          // Записываем в БД тип медиа (фильм сериал мульт и тд)
//     const mediaType = await db.type.findOrCreate({
//       where: {
//         name: movie.type
//       },
//       defaults: {
//         name: movie.type
//       }
//     });
//     let genreText = '';
//     let uniqueGenres = new Set();
//     // Это нужно чтобы записывать массив жанров одним списком 
//     for (const genreObject of movie.genres) {
//         if (genreObject && genreObject.genre) {
//           uniqueGenres.add(genreObject.genre);
//           genreText = genreText + (genreText ? ', ' : '') + genreObject.genre; 
//         }
//     }
//     //записываем в БД список жанров у фильма
//     const mediaGenre = await db.genre.findOrCreate({
//       where: {
//         name: genreText
//       },
//       defaults: {
//         name: genreText
//       }
//     });
//     let countryText = '';
//     let uniqueCountries = new Set();
//     // Это нужно чтобы записывать массив стран одним списком 
//     for (const countryObject of movie.countries) {
//         if (countryObject && countryObject.country && !uniqueCountries.has(countryObject.country)) {
//             uniqueCountries.add(countryObject.country);
//             countryText = countryText + (countryText ? ', ' : '') + countryObject.country;      
//         }
//     }
//     //записываем в БД список стран у фильма
//     const mediaCountry = await db.country.findOrCreate({
//       where: {
//         name: countryText
//       },
//       defaults: {
//         name: countryText
//       }
//     });
//     let name;
//     if (movie.nameRu !== null) {
//       name = movie.nameRu;
//     } else {
//       name = movie.nameOriginal;
//     }
//     await db.media.findOrCreate({
//       where: {
//         title: name,
//         description: movie.description,
//         rating: movie.ratingKinopoisk,
//         image_url: movie.posterUrl,
//         genre_id: mediaGenre[0].id,
//         year_id: mediaYear[0].id,
//         country_id: mediaCountry[0].id,
//         type_id: mediaType[0].id,
//       },
//       defaults: {
//         title: name,
//         description: movie.description,
//         rating: movie.ratingKinopoisk,
//         image_url: movie.posterUrl,
//         genre_id: mediaGenre[0].id,
//         year_id: mediaYear[0].id,
//         country_id: mediaCountry[0].id,
//         type_id: mediaType[0].id,
//       }
//     });

// }

module.exports = db;