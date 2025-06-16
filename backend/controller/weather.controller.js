import {Weather} from "../models/weather.model.js";

const addweather = async(req,res) =>{

    const {city,temprature} = req.body;


  const createdata = await Weather.create({
    city,
    
    temprature
  });


  console.log("data added ")
  return res.status(200).send(createdata);
 

}


export default addweather;