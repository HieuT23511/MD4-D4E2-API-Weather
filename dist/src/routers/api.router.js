"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRouter = void 0;
const express_1 = __importDefault(require("express"));
const weather_controllers_1 = require("../controllers/weather.controllers");
exports.apiRouter = express_1.default.Router();
exports.apiRouter.get('/', weather_controllers_1.WeatherControllers.getWeather);
//# sourceMappingURL=api.router.js.map