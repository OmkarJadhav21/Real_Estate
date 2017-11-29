import { Directive, ElementRef, Renderer2, HostBinding, Input, HostListener} from '@angular/core';

@Directive({
  selector: '[appBlurdir]'
})
export class BlurdirDirective {

  constructor() { }
  @Input('appBlurdir')
  @HostBinding('style.border')
  brd:string
@HostListener('click')
onEnter(){
 this.brd='2px solid red'
}
@HostListener('mouseleave')
onLeave(){
 this.brd=null;
}

}
