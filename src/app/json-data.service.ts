import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Users } from './Models/users';

@Injectable({
  providedIn: 'root'
})
export class JsonDataService{
  private baseurl = "https://jsonplaceholder.typicode.com/users";
  constructor(private _httpClient: HttpClient) { }

  dataApi() : Observable<Users>{
    return this._httpClient.get<Users>(this.baseurl);
  }
}
