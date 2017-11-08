import { Routes, RouterModule } from '@angular/router'
import { RegisterComponent } from './register/register.component';

const routes:Routes=[
    // { path:'',component:HomeComponent},
    { path:'register',component:RegisterComponent },
  
];

export const MyRoutingModule = RouterModule.forRoot(routes);