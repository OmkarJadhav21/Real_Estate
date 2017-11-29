import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EffectService } from '../allServices/effect.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})
export class MainpageComponent implements OnInit {

  constructor( private router:Router,
               private overser:EffectService
) { }

  ngOnInit() {
  }
  navSub(swichVal){

switch(swichVal){
  case 'home' :this.router.navigate(['/home'])
  break;
  case 'list' :this.router.navigate(['/list-view'])
  break;
  case 'grid' :this.router.navigate(['/grid-view'])
  break;
  case 'submit' :this.router.navigate(['/propertyadd'])
  break;
  case 'ADetail' :this.router.navigate(['/agentDetail'])
  break;
  case 'AProperty' :this.router.navigate(['/home'])
  break;
  case 'AReviews' :this.router.navigate(['/home'])
  break;
  case 'contact' :this.router.navigate(['/home'])
  break;
}
document.getElementById("sidebar").classList.toggle('active');
document.getElementById("sidebar1").classList.toggle('active');
  this.overser.scroollEnable();

  }
  navHome(){
    this.router.navigate(['/home'])
  }
toggleSidebar(){
    document.getElementById("sidebar").classList.toggle('active');
    document.getElementById("sidebar1").classList.toggle('active');
  this.overser.scrooll();
  }
toggleSidebar1(){
  document.getElementById("sidebar").classList.toggle('active');
  document.getElementById("sidebar1").classList.toggle('active'); 
  this.overser.scroollEnable();
  
}
}

