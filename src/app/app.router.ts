import { Routes, RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PropertyaddComponent } from './propertyadd/propertyadd.component';

const routes:Routes=[
    { path:'',component:MainpageComponent},
    { path:'navbar',component:NavbarComponent },
    { path:'propertyadd',component:PropertyaddComponent },
  
];

export const MyRoutingModule = RouterModule.forRoot(routes);