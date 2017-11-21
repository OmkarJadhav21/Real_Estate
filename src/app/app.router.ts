import { Routes, RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PropertyaddComponent } from './propertyadd/propertyadd.component';
import { HomeComponent } from './home/home.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';

const routes:Routes=[
    { path:'',component:HomeComponent},
    { path:'navbar',component:NavbarComponent },
    { path:'propertyadd',component:AddpropertyComponent },
    { path:'home',component:HomeComponent },
  
];

export const MyRoutingModule = RouterModule.forRoot(routes);