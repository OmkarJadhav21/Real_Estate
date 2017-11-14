import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms/src/directives/ng_form';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  frm:NgForm;

one(){
// this.frm=frmo;
// console.log("data in frm",this.frm.value)
}
two(){
}
three(frmo:NgForm){
console.log(frmo.value);

}
}
