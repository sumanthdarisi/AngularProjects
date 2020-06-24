import { Component, OnInit } from '@angular/core';
import { JsonDataService } from '../json-data.service';
import { Users } from '../Models/users';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  usersList: Users[];
  constructor(private _jsondata: JsonDataService) { }

  ngOnInit(){
    this._jsondata.dataApi().subscribe(data =>{
      console.log(data);
    })
  }

}
