import express from 'express';
import {getReposBylanguage} from'../controllers/exploreController.js'
const exploreRouter = express.Router();

//all routes

exploreRouter.get('/explore/:language',getReposBylanguage);

export default exploreRouter;