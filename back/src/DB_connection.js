
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config()
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const FavoriteModel = require('./models/Favorite');
const UserModel = require('./models/User');
const EpisodeModel = require('./models/Episode');
const CharacterModel = require('./models/Character');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Debajo de este comentario puedes ejecutar la función de los modelos.

FavoriteModel(sequelize);
UserModel(sequelize);
EpisodeModel(sequelize);
CharacterModel(sequelize);

// Ejercicio 06
// ¡Relaciona tus modelos aquí abajo!
const { User, Favorite, Character, Episode } = sequelize.models;

User.belongsToMany(Favorite, {through: "user_favorite"});
Favorite.belongsToMany(User, { through: "user_favorite"});

Character.belongsToMany(Episode, {through: "character_episode"});
Episode.belongsToMany(Character, { through: "character_episode"});


module.exports = {
   User,
   Favorite,
   Character,
   Episode,
   conn: sequelize,
};
