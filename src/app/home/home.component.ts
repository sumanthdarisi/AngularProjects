import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  template: any[] = [
    '1. Route takes to Template driven form',
    '2. Explain the tech terms like ngModel, html attr & other fields used',
    '3. Sample form with 4-6 form fields',
    '4. Add both default and custom validators',
    '5. Have default and custom directives',
    '6. Have default and custom pipes'
  ]

  tPoints: any[] = [
    'a. Requires FORMSMODULE from @angular/forms', //need highligher directive here for module name
    'b. Best for simple forms',
    'c. Automatically tracks the state and form changes',
    'd. Uses ngModel/2-way binding',
    'e. In template driven forms, angular created FormGroup & FormControls automatuically behind the scenes',
    'f. Con: Testing is difficult. Requires end-to-end'
  ]

  tSteps: any[] = [
    'step1: Create a basic bootstrap form HTML using labels, inputs, select, check box, radio & submit button',
    'step2: Import {FormsModule} from "@angular/forms"',
    'step3: assign ngForm object to a template driven variable || Example: <form #myform="ngForm"',
    'step4: Add "name" attribute to each form field - this helps ngForm understand what are the fields form has',
    'step5: Create a class or add the form field variables in component',
    'step6: Bind the component variables with html fields using [(ngModel)] - this is used to bind the data from html <-> model',
    'step7: assign ngModel class to the template driven variable for each field to access angular state control props (touched/untouched; dirty/pristine; valid/invalid)',
    'step8: use [disabled]="myForm.form.invalid" on submit button to enable the submit only if form is valid',
    "Optional: Use ngModel's errors property to display multiple error messages required/pattern/min/max..."
  ]

  reactive: any[] = [
    '1. Route takes to React forms',
    '2. Explain the tech terms used like form-group, control, builder, array',
    '3. Sample form with 4-6 form fields',
    '4. Add both default and custom validators',
    '5. Have default and custom directives',
    '6. Have default and custom pipes'
  ]

  rPoints: any[] = [
    'a. All the logic written in component instead of on HTML',
    'b. Best for complex scenarios like Dynamic form inputs, custom validation & dynamic validation',
    'c. Easy to run unit testing',
    'd. formGroup, formControl, formArray, formBuilder classes play the major role in Reative Model Forms'
  ]

  rSteps: any[] = [
    'step1: Create a basic bootstrap form HTML using labels, inputs, select, check box, radio & submit button',
    'step2: Import {ReativeFormsModule} from "@angular/forms"',
    'step3: Import FormGroup, FormController, FormBuilder from "@angular/forms" in the component',
    'step4: Create the formGroup instance and add/declare all the form fields as formControls',
    'step5: Now bind the HTML with [formGroup] directive as shown <form [formGroup] = "registrationForm">',
    'step6: Add formControlName property to each form field on the HTML as shown <input type="text" formControlName="username">',
    'step7: Import the Validators class from @angular/forms then use validors.MinLength, Validators.Required ... validators to each formControl',
    'step8: Use formGroup name and get property to use ngModel control props as shown. Example: *ngIf="registrationForm.get("userName").invalid && registrationForm.get("userName").touched) to show the error message"',
    "Optional: Use formGroup's setValue, patchValue and getValue methods to set,attach or get the formGroup values when called for default values"
  ]

  vPoints: any[] = [
    '1. Both template driven & reactive model forms use custom validators.',
    '2. A custom validator is a function used as a directive for template driven; validator function argument for reactive model forms.',
    '3. Custom validators are functions. Follwing are the steps to create a custom validator and call it from any type of form.',
    'step1: Import {AbstarctControl, Validatorfn} from "@angular/forms"',
    'step2: Export function fn_PasswordValidator(control: AbstractControl): {[Key: string]: any} | null',
    '>> Control is the input parameter',
    '>> If the validation success, then funtion returns a key-value object',
    '>> If the validation fails then the function returns null',
    'Note:',
    'a. AbstractControl is the parent class of formGroup & formControl'
  ]

}
