
import mongoose, { Schema } from "mongoose";


const weatherSchema = new Schema(
    {
        city: {
            type: String,
            trim: true,
            required: true,
        },
        temprature: {
            type: String,
            trim: true,
            required: true,
        },



    },  { timestamps: true },
);

export  const Weather = mongoose.model("Weather",weatherSchema);