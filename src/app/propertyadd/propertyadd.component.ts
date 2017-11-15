import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-propertyadd',
  templateUrl: './propertyadd.component.html',
  styleUrls: ['./propertyadd.component.scss']
})
export class PropertyaddComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
prev1=this.fun1();
  tab1:boolean;
  tab2:boolean
  tab3:boolean
  tab4:boolean
  tab5:boolean

fun1(){
  this.tab1=true;
  this.tab2=false
  this.tab3=false
  this.tab4=false
  this.tab5=false
  console.log("in fun1111");
}
fun2(){
  this.tab1=false;
  this.tab2=true
  this.tab3=false
  this.tab4=false
  this.tab5=false
  console.log("in fun1111");
}
fun3(){
  this.tab1=false;
  this.tab2=false
  this.tab3=true
  this.tab4=false
  this.tab5=false
  console.log("in fun1111");
}
fun4(){
  this.tab1=false;
  this.tab2=false
  this.tab3=false
  this.tab4=true
  this.tab5=false
  console.log("in fun1111");
}
fun5(){
  this.tab1=false;
  this.tab2=false
  this.tab3=false
  this.tab4=false
  this.tab5=true
  console.log("in fun1111");
}

}
