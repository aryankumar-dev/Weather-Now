import express from "express";
import dotenv from "dotenv";
import axios from 'axios';
const app = express();
dotenv.config();
const port = process.env.PORT;


const apiKey = process.env.WEATHER_API_KEY;


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/weather',async (req, res) => {
    try {
        const city = req.query.city || 'delhi';
        const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);
        const weatherData = response.data.main.temp;
        console.log(weatherData);
           res.send(weatherData);
       

    }
    catch (error) {
        console.error('Error fetching weather data:', error);
        res.status(500).send('Error fetching weather data');
    }
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})