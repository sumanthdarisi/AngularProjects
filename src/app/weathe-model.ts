import { Time } from '@angular/common';


export class WeatheModel {
    name: string;
    humidity: number;
    temp: number;
    minTemp: number;
    maxTemp: number;
    feelslike: number;
    windSpeed: number;
    SunRiseTime: string;
    SunSetTime: string;
    Description: string;
    Country: string;
    Time: any;

    constructor(clientData: any){
        this.name = clientData.name;
        this.humidity = clientData.main.humidity;
        this.temp = clientData.main.temp;
        this.minTemp = clientData.main.temp_min;
        this.maxTemp = clientData.main.temp_max;
        this.feelslike = clientData.main.feels_like;
        this.windSpeed= clientData.wind.speed;
        this.SunRiseTime = Math.floor(clientData.sys.sunrise/1000).toString();
        this.SunSetTime = Math.floor(clientData.sys.sunset/1000).toString();
        this.Description = clientData.weather[0].description;
        this.Country = clientData.sys.country;
        this.Time = new Date(clientData.dt * 1000).toDateString();
    }
}
