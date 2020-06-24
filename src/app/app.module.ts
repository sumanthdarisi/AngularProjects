import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { ReactiveModelFormComponent } from './reactive-model-form/reactive-model-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';
import { KtoCPipe } from './Pipes/kto-c.pipe';
import { KtoFPipe } from './Pipes/kto-f.pipe';
import {WindspeedPipe} from './Pipes/windspeed.pipe';
import { DataComponent } from './data/data.component'

@NgModule({
  declarations: [
    AppComponent,
    TemplateDrivenFormComponent,
    ReactiveModelFormComponent,
    PageNotFoundComponent,
    HomeComponent,
    WeatherAppComponent,
    KtoCPipe,
    KtoFPipe,
    WindspeedPipe,
    DataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
