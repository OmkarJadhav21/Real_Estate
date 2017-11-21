import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MyRoutingModule } from './app.router';
import { FormsModule } from '@angular/forms';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PropertyaddComponent } from './propertyadd/propertyadd.component';
import { NavbarrComponent } from './navbarr/navbarr.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { HomeComponent } from './home/home.component';
import { DetailPropertyComponent } from './detail-property/detail-property.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainpageComponent,
    PropertyaddComponent,
    NavbarrComponent,
    AddpropertyComponent,
    HomeComponent,
    DetailPropertyComponent,
    
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    NgbModule.forRoot(),
    FormsModule,
    MyRoutingModule,
    BrowserAnimationsModule,
  
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
