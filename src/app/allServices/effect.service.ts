import { log } from 'util';
import { Injectable ,EventEmitter,Output} from '@angular/core';

@Injectable()
export class EffectService {
  @Output()
  em:EventEmitter<any>
  constructor() {
    this.em=new EventEmitter<String>();
   }
   scrooll(){       
    console.log("true");
    this.em.emit({
    val :true
  })
}
scroollEnable(){
         this.em.emit({
           val :false
         })
     }


  calling(callback: any) {
    this.em.subscribe(sub => {
      callback(sub);
    });
  }
}
