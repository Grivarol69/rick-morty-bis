const { Router } = require('express');
const charactersRoutes = Router();

charactersRoutes.get("/", async (req, res) => {
  const { status } = req.query;
  try {
    const characters = status
      ? await findAllCharacters({ status })
      : await findAllCharacters();

    res.status(200).json(characters);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

charactersRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const character = await findCharacterById(id);
    res.status(200).json(character);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

charactersRoutes.post("/", async (req, res) => {
  try {
    const { name, gender, status, origin, species, episodes } = req.body;
    const newCharacter = await createCharacter({
      name,
      gender,
      status,
      origin,
      species,
      episodes,
    });
    res.status(200).json(newCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

charactersRoutes.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, gender, status, origin, species, episodes } = req.body;
    const updatedCharacter = await updateCharacter(id, { name, gender, status, origin, species, episodes, image });
    res.status(200).json(updatedCharacter);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

charactersRoutes.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedCharacter = await deleteCharacter(id);
    if (deletedCharacter == []) res.status(200).json({ msg: "Item deleted successfully" })
    else res.status(200).json(deletedCharacter);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = charactersRoutes;