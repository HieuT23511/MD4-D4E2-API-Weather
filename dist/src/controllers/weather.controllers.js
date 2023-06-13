"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherControllers = void 0;
const axios_1 = __importDefault(require("axios"));
class WeatherControllers {
    static async getWeather(req, res) {
        try {
            const url = 'http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=0ca48f291521340c8429c9dbfe7e68c3&lang=vi';
            const response = await axios_1.default.get(url);
            const data = response.data;
            console.log(data);
            if (data) {
                res.render('weather', { data: data });
            }
            else {
                res.end('<h1>Error</h1>');
            }
        }
        catch (err) {
            res.end('<h1>Error</h1>');
        }
    }
}
exports.WeatherControllers = WeatherControllers;
//# sourceMappingURL=weather.controllers.js.map