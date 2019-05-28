import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {


    this.height();
  }
















  
// اعادة تعيين حجم الصحفة
  height(){
    // set height of body
// offsetHeight -- clientHeight
     //window.innerHeight; 
// document.documentElement.clientHeight;
let navbar = document.getElementById('navbar-h').clientHeight;
let logosRow = document.getElementById('bodyRow-h').clientHeight;
let cenerSpase = document.getElementById('footer-h').clientHeight;
let win = window.document.body.clientHeight;
let newHeight = win - (navbar + logosRow + cenerSpase);

document.getElementById("containerHeight").style.height = newHeight+"px";
document.getElementById("bodyRow-h").style.height = 524 +"px";

}

}
