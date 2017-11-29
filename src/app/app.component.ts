import { Component } from '@angular/core';
import { EffectService } from './allServices/effect.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  val:boolean=false;
  constructor( private effectService: EffectService
  ){}
    ngOnInit() {
       this.effectService.calling(dt => {
        this.val=dt.val;
      });
    }  title = 'app';
}
