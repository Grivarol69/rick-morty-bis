const { Favorite, Episode } = require("../DB_connection.js");

const findFavoriteById = async (id) => {
  const favorite = await Favorite.findByPk(id, {
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (!favorite) throw Error("Personaje Favorito no existe");
  return favorite;
};


const findAllFavorites = async (query) => {
  const favorite = await Favorite.findAll({
    where: query,

    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return favorite;
};

const createFavorite = async ({
  name,
  gender,
  status,
  origin,
  species,
  episodes,
  image
}) => {
  const newFavorite = await Favorite.create({
    name,
    gender,
    status,
    origin,
    species,
    image
  });

  newFavorite.addEpisodes(episodes);

  return newFavorite;
};

const updateFavorite = async (id, dataFavorite) => {
  const {name, gender, status, origin, species, episodes, image} = dataFavorite;
  const updatedFavorite = await Favorite.findByPk(id);
  updatedFavorite.name = name; 
  updatedFavorite.gender = gender;
  updatedFavorite.status = status;
  updatedFavorite.origin = origin;
  updatedFavorite.species = species;
  updatedFavorite.episodes = episodes;
  updatedFavorite.image = image;

  await Favorite.save();
  return updatedFavorite;
}

const deleteFavorite = async (id) => {
  const favorite = await Favorite.findByPk(id);
  const aux = { ...favorite };
  await favorite.destroy();
  return aux;
};

module.exports = {
  findFavoriteById,
  findAllFavorites,
  createFavorite,
  updateFavorite,
  deleteFavorite
};