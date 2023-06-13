import axios from "axios";

export class WeatherControllers {
    static async getWeather(req: any, res: any) {
        try {
            const url = 'http://api.openweathermap.org/data/2.5/weather?id=1581130&appid=0ca48f291521340c8429c9dbfe7e68c3&lang=vi';
            const response = await axios.get(url);
            const data = response.data
            console.log(data)
            if (data) {
                res.render('weather', {data: data});
            } else {
                res.end('<h1>Error</h1>')
            }
        } catch (err) {
            res.end('<h1>Error</h1>')
        }
    }
}