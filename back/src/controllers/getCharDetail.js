const axios = require('axios');
const { KEY, URL } = process.env;

const getCharDetail = (req, res) => {
  const params = req.params;
  axios
   .get(`${URL}/${id}}`)
   .then((response) => res.status(201).json({
      id: response.data.id, 
      name: response.data.name, 
      species: response.data.species, 
      image: response.data.image,
      gender: response.data.gender,
      origin: response.data.origin
    }))
   .catch((error) => res.status(500).json({ error: "Character not found"}));
}


//? const successH = (response,res) => {
//?   const { name, gender, status, origin, species, image} = response.data;
//?   res.writeHead(200, {"Content-Type": "application/json"});
//?   res.end(JSON.stringify({ name, gender, status, origin, species, image}));

//? }

//? const errorH = (error, res) => {
//?   res.writeHead(500, {"Content-Type": "text/plain"});
//?   res.end(error.message);
  
//? }

//? const getCharDetail = (res, id) => {
//?   axios
//?   .get(`${URL}/character/${id}?key=${KEY}`)
//?   .then((response) => successH(response, res))
//?   .catch((error) => errorH(error, res));
//? }

module.exports = getCharDetail;