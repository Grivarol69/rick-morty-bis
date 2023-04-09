const Router = require('express');
const getCharById = require('../controllers/getCharById.js');
const getCharDetail = require('../controllers/getCharDetail.js');
const usersRouter = require('./usersRouter.js');
const favoritesRouter = require('./favoritesRouter.js');
const charactersRoute = require('./charactersRoutes.js');
const episodesRouter = require('./episodesRouter.js');

const router = Router();

router.get("/onsearch/:id", getCharById);
router.get("/detail/:id", getCharDetail);

router.use("/users", usersRouter);
router.use("/favorites", favoritesRouter);
router.use("/characters", charactersRoute);
router.use("/episodes", episodesRouter);



module.exports = router;