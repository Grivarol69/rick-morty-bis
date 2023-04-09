const { Router } = require('express');

const episodesRouter = Router();

episodesRouter.get("/", async (req, res) => {
  try {
    const episodes = await findAllEpisodes();
    res.status(200).json(episodes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

episodesRouter.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newEpisode = await createEpisode(name);
    res.status(201).json(newEpisode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

episodesRouter.post("/bulk", async (req, res) => {
  const { episodes } = req.body;
  const created = await createBulkEpisodes(episodes);
  res.status(200).json({ response: "created" });
});

episodesRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedEpisode = await deleteEpisode(id);
    res.status(200).json(deletedEpisode);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = episodesRouter;