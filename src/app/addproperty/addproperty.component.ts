import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Property } from './property-data';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.scss']
})
export class AddpropertyComponent implements OnInit {
  one=true;
  two=false;
  three=false;
  four=false;
  five=false;

  constructor( 
    // private property: PropertySerService 
  ) { }

  ngOnInit() {
  }


  onOne(myForm1){
    this.one=false;
    this.two=true;
    this.three=false;
    this.four=false;
    this.five=false;
    console.log(myForm1.value);
    var property1 : Property = new Property();
    property1.propertyPostedby = myForm1.value.propertyPostedby;
    property1.fullName = myForm1.value.fullName;
    property1.email = myForm1.value.email;
    property1.mobile = myForm1.value.mobile;
    property1.companyName = myForm1.value.companyName;
    property1.aboutBuilder = myForm1.value.aboutBuilder;  
    // this.property.addProperty(property1).subscribe(res => console.log(res));
    
  }

  onTwo(myForm2){
    this.one=false;
    this.two=false;
    this.three=true;
    this.four=false;
    this.five=false;
    console.log(myForm2.value);
   }


  onThree(myForm3){
    this.one=false;
    this.two=false;
    this.three=false;
    this.four=true;
    this.five=false;
    console.log(myForm3.value);
    }


  onFour(myForm4){
    this.one=false;
    this.two=false;
    this.three=false;
    this.four=false;
    this.five=true;
    console.log(myForm4.value);
    
  }

  

}
