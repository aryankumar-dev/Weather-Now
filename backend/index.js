import express from "express";
import dotenv from "dotenv";
import axios from 'axios';
import cors from 'cors';
import connectDB from "./libs/db.js";
import weatherroute from "./routes/weather.route.js"
const app = express();
dotenv.config();
const PORT = process.env.PORT;
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true   // if you're using cookies or auth headers
}));
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


connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  })
  .catch((err) => {
    console.error("Mongodb connection error", err);
    process.exit(1);
  });

app.use("/api/v1/add", weatherroute)

