import { Component, OnInit } from '@angular/core';
import { document } from 'angular-bootstrap-md/utils/facade/browser';
import { EffectService } from '../allServices/effect.service';

@Component({
  selector: 'app-navbarr',
  templateUrl: './navbarr.component.html',
  styleUrls: ['./navbarr.component.scss']
})
export class NavbarrComponent implements OnInit {

  isLogin:boolean=false;
  constructor(// private effectService: EffectService
  ){}
    ngOnInit() {
       // this.effectService.calling(dt => {
      //   this.isLogin=dt.isLogin;
      // });
    }
  toggleSidebar(){
      document.getElementById("sidebar").classList.toggle('active');
    }
}
