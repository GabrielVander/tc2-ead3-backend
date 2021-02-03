import {Schema} from "mongoose";

const schema = new Schema(
    {
        name: String,
        age: Number,
        weight: Number,
        race: String,
        type: String,
    },
    {
        timestamps: true,
    });

export default schema;
