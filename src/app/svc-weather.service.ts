import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatheModel } from './weathe-model';


@Injectable({
  providedIn: 'root'
})
export class SvcWeatherService {
  private _url;
  private _baseurl;
  private _apikey;
  public cityName: string;
  public weatherData$: Observable<any>;

  constructor(private http: HttpClient) { 
    this._baseurl = "http://api.openweathermap.org/data/2.5/weather?q=";
    this._apikey = "562201c396e1ac10eb0355a3f5d066be";
  }

  callAPI(name: string){
    this._url = this._baseurl+name+"&appid="+this._apikey;
    return this.http.get(this._url);
  }
}


