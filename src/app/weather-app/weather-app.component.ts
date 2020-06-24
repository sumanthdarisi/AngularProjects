import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { SvcWeatherService } from '../svc-weather.service';
import { WeatheModel } from '../weathe-model';

@Component({
  selector: 'app-weather-app',
  templateUrl: './weather-app.component.html',
  styleUrls: ['./weather-app.component.css']
})
export class WeatherAppComponent implements OnInit {
  cityName: string = "Miami";
  iconDisplayBoolean: boolean= true; // night
  wm: WeatheModel;

  invalidCityName: boolean = false;

  constructor(private weatherService: SvcWeatherService) { }

  ngOnInit(){
    
  }

  weatherSearch(){
    this.weatherService.callAPI(this.cityName)
    .subscribe(data => {
      this.invalidCityName = false;
      this.wm = new WeatheModel(data);
    },
    (error)=>{
      this.invalidCityName = true;
    });   
  }
}
