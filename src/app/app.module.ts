import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HomeComponent } from './components/home/home.component';
import { GetstartedComponent } from './components/getstarted/getstarted.component';
import { PlacesComponent } from './components/places/places.component';
import { BycategoryComponent } from './components/bycategory/bycategory.component';

import { UserService } from './services/user.service';
import { PlaceService } from './services/place.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    HomeComponent,
    GetstartedComponent,
    PlacesComponent,
    BycategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService , PlaceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
