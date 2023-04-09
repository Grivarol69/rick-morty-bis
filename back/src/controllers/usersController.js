const { User } = require('../DB_connection.js');

const findAllUsers = async () => {
  const users = await User.findAll();
  return users;
}

const findUserById = async (id) => {
  const user = await User.findByPk(id);

  // const user = await User.findByPk(id, {
  //   include: {
  //     model: Favorite,
  //     attributes: ["name"],
  //     through: {
  //       attributes: []
  //     },
  //   },
  // });

  if (!user) throw Error("User not exist");
  return user;
}

const createUser = async ({email, password}) => {
  const newUser = await User.create({email, password});
  return newUser;
}

const createBulkUsers = async (users) => {
 const newUsers = await User.bulkCreate(users);
 return newUsers;
}

const updateUser = async (id, dataUser) => {
  const { email, password } = dataUser;
  const updatedUser = await User.findByPk(id);
  updatedUser.email = email;
  updatedUser.password = password;

  await User.save();
  return updatedUser;
}

const deleteUser = async (id) => {
  const updatedUser = await User.findByPk(id);
  const sendUser = { ...updatedUser }
  await User.destroy();
  return sendUser;
}

module.exports = {
  findAllUsers,
  findUserById,
  createUser,
  createBulkUsers,
  updateUser,
  deleteUser
}