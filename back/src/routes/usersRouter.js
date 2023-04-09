const { Router } = require("express");
const {
  findAllUsers,
  findUserById,
  createUser,
  createBulkUsers,
  updateUser,
  deleteUser,
} = require("../controllers/usersController");

const usersRouter = Router();

usersRouter.get("/", async (req, res) => {
  try {
    const users = await findAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const user = await findUserById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;
    const createdUser = await createUser({ email, password });
    res.status(200).json(createdUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.post("/bulk", async (req, res) => {
  try {
    const { users } = req.body;
    const created = await createBulkUsers(users);
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const updatedUser = await updateUser(id, { email, password });
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

usersRouter.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = usersRouter;
