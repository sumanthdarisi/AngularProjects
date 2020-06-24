import { Component, OnChanges, SimpleChanges } from '@angular/core';
import {TdfModel} from '../tdf-model';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnChanges {

  
  constructor() { }
  

  
  formModel = new TdfModel();
  topics: any[] = ['Modules','Components','Directives','Routing','Pipes','Services','Observables','Forms','Validators'];

  ngOnChanges(changes: SimpleChanges){
    console.log(changes);
  }

}
