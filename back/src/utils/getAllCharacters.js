const axios = require('axios');
const { Character } = require("../DB_connection.js");



const getAllCharacters = async () => {
  const api = await axios.get("https://rickandmortyapi.com/api/character");
  const formato = api.data.results.map((char) => {
    const character = {
      name : char.name,
      status: char.status,
      species: char.species,
      gender: char.gender,
      origin: char.origin.name,
      image: char.image,
      create: false
    }
    return character;
  });
  
  await Character.bulkCreate(formato);
}

module.exports = getAllCharacters;