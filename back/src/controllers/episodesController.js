const { Episode } = require("../DB_connection.js");

const findAllEpisodes = async () => {
  const episodes = await Episode.findAll();
  return episodes;
};

const createBulkEpisodes = async (episodes) => {
  const newEpisodes = await Episode.bulkCreate(episodes);
  return newEpisodes;
};

const createEpisode = async (name) => {
  const newEpisode = await Episode.create({ name });
  return newEpisode;
};

module.exports = {
  findAllEpisodes,
  createBulkEpisodes,
  createEpisode
};