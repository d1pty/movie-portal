var DataTypes = require("sequelize").DataTypes;
var _comment = require("./comment");
var _country = require("./country");
var _genre = require("./genre");
var _media = require("./media");
var _type = require("./type");
var _user = require("./user");
var _year = require("./year");

function initModels(sequelize) {
  var comment = _comment(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var genre = _genre(sequelize, DataTypes);
  var media = _media(sequelize, DataTypes);
  var type = _type(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var year = _year(sequelize, DataTypes);

  media.belongsTo(country, { as: "country", foreignKey: "country_id"});
  country.hasMany(media, { as: "media", foreignKey: "country_id"});
  media.belongsTo(genre, { as: "genre", foreignKey: "genre_id"});
  genre.hasMany(media, { as: "media", foreignKey: "genre_id"});
  comment.belongsTo(media, { as: "medium", foreignKey: "media_id"});
  media.hasMany(comment, { as: "comments", foreignKey: "media_id"});
  media.belongsTo(type, { as: "type", foreignKey: "type_id"});
  type.hasMany(media, { as: "media", foreignKey: "type_id"});
  comment.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(comment, { as: "comments", foreignKey: "user_id"});
  media.belongsTo(year, { as: "year", foreignKey: "year_id"});
  year.hasMany(media, { as: "media", foreignKey: "year_id"});

  return {
    comment,
    country,
    genre,
    media,
    type,
    user,
    year,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
