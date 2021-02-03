import {model} from "mongoose";
import {AnimalSchema} from "../schema";

const dbModel = model('Animal', AnimalSchema);

export default dbModel;
