import {Router} from "express";

import CRUD from "easy-express-crud-generator";
import {AnimalModel} from "../repository/model";

const animalRouter = new CRUD(AnimalModel).getRouter(Router());

export default animalRouter;
