import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {fn_passwordValidator} from '../Shared/fn_passwordValidator'

@Component({
  selector: 'app-reactive-model-form',
  templateUrl: './reactive-model-form.component.html',
  styleUrls: ['./reactive-model-form.component.css']
})
export class ReactiveModelFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  registrationForm = new FormGroup({
    userName: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  },fn_passwordValidator);


}
