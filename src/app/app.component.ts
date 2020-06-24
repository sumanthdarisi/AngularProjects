import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularForms';

  navLinks = [
    {label:'Home',path:'/Home'},
    {label:'Template-Driven',path:'/tdf'},
    {label:'Reactive-Form',path:'/rmf'}
  ];

}
