import { Router } from "express";
import  addweather from "../controller/weather.controller.js"

const weatherroute = Router();

weatherroute.route('/addweather')
    .post(addweather);

export default weatherroute;