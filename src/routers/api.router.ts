import express from "express";
import {WeatherControllers} from "../controllers/weather.controllers";

export const apiRouter = express.Router();

apiRouter.get('/', WeatherControllers.getWeather)