import { Routes, RouterModule } from '@angular/router'
import { NavbarComponent } from './navbar/navbar.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PropertyaddComponent } from './propertyadd/propertyadd.component';
import { HomeComponent } from './home/home.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { DetailPropertyComponent } from './detail-property/detail-property.component';
import { ListViewComponent } from './list-view/list-view.component';
import { GridViewComponent } from './grid-view/grid-view.component';
import { ListSearchComponent } from './list-search/list-search.component';
import { AgentDetailComponent } from './agent-detail/agent-detail.component';

const routes:Routes=[
    { path:'',component:HomeComponent},
    { path:'navbar',component:NavbarComponent },
    { path:'propertyadd',component:AddpropertyComponent },
    { path:'home',component:HomeComponent },
    { path:'detailproperty',component:DetailPropertyComponent },
    { path:'list-view',component:ListViewComponent },
    { path:'grid-view',component:GridViewComponent },
    { path:'app-list-search',component:ListSearchComponent },
    { path:'agentDetail',component:AgentDetailComponent },
    
    
    
];

export const MyRoutingModule = RouterModule.forRoot(routes);