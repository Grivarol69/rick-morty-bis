const { Character, Episode } = require("../DB_connection.js");

const findCharacterById = async (id) => {
  const character = await Character.findByPk(id, {
    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  if (!character) throw Error("Personaje no existe");
  return character;
};


const findAllCharacters = async (query) => {
  const characters = await Character.findAll({
    where: query,

    include: {
      model: Episode,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  return characters;
};

const createCharacter = async ({
  name,
  gender,
  status,
  origin,
  species,
  episodes,
  image
}) => {
  const newCharacter = await Character.create({
    name,
    gender,
    status,
    origin,
    species,
    image
  });

  newCharacter.addEpisodes(episodes);

  return newCharacter;
};

const updateCharacter = async (id, dataCharacter) => {
  const {name, gender, status, origin, species, episodes, image} = dataCharacter;
  const updatedCharacter = await Character.findByPk(id);
  updatedCharacter.name = name; 
  updatedCharacter.gender = gender;
  updatedCharacter.status = status;
  updatedCharacter.origin = origin;
  updatedCharacter.species = species;
  updatedCharacter.episodes = episodes;
  updatedCharacter.image = image;

  await Character.save();
  return updatedCharacter;
}

const deleteCharacter = async (id) => {
  const character = await Character.findByPk(id);
  const aux = { ...character };
  await character.destroy();
  return aux;
};

module.exports = {
  findCharacterById,
  findAllCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter
};