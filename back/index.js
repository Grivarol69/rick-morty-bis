const server = require('./src/server.js');
const { conn } = require('./src/DB_connection.js');
const { Character } = require("./src/DB_connection.js");
const getAllCharacters = require('./src/utils/getAllCharacters.js');

require('dotenv').config();

const PORT = process.env.PORT || 4000;


conn
  .sync({ force: true})
  .then(() => {
    server.listen(PORT, () => {
      Character.count().then(cant => {
        if (!cant) {
          getAllCharacters();
        }
      });
      console.log(`Server running on PORT ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
