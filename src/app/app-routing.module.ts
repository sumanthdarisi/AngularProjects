import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';
import {ReactiveModelFormComponent} from './reactive-model-form/reactive-model-form.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HomeComponent} from './home/home.component';
import { WeatherAppComponent } from './weather-app/weather-app.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tdf', component: TemplateDrivenFormComponent},
  {path: 'rmf', component: ReactiveModelFormComponent},
  {path: 'weather', component: WeatherAppComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent }  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
