import mongoose from "mongoose";
import mongoose, { Schema } from "mongoose";


const weatherSchema = new Schema(
    {
        city: {
            type: String,
            trim: true,
            required: true,
        },
        weather: {
            type: String,
            trim: true,
            required: true,
        },



    },  { timestamps: true },
);

export const Weather = mongoose.model("Weather",weatherSchema);