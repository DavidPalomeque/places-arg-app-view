import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { PlacesComponent } from './components/places/places.component';
import { BycategoryComponent } from './components/bycategory/bycategory.component';

import { AuthorizationGuard } from './guards/authorization.guard';

const routes: Routes = [
  {path:"" , redirectTo:"getstarted" , pathMatch:"full"},
  {path:"getstarted" , component:GetstartedComponent},
  {path:"registration" , component:RegistrationComponent},
  {path:"login" , component:LoginComponent},
  {path:"home" , component:HomeComponent , canActivate:[AuthorizationGuard]},
  {path:"places" , component:PlacesComponent , canActivate:[AuthorizationGuard]},
  {path:"bycategory" , component:BycategoryComponent , canActivate:[AuthorizationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

