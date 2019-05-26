import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    this.height();
  }


  
  verfiyForm: string="";
  loading: boolean = false;
  route: string = "home";

  user = {
    email:"",
    pwd: ""
  }

  results={
    email:"",
    pwd: ""
  }


  mySubmit({value,valid}){
    if(valid){ 
      this.results.email = value.email;
      this.results.pwd = value.pwd;
      this.loading = true;
      this.verfiyForm = ""
    }

    else {this.verfiyForm = "قيمة غير صحيحة!";}
  }








  height(){
        // set height of body
    // offsetHeight -- clientHeight
         //window.innerHeight; 
    // document.documentElement.clientHeight;
    let navbar = document.getElementById('navbar').clientHeight;
    let logosRow = document.getElementById('logosRow').clientHeight;
    let cenerSpases = document.getElementById('cenerSpase').clientHeight;
    let cenerSpase = cenerSpases + 0;

    let win = window.document.body.clientHeight;
    let newHeight = win - (navbar + logosRow + cenerSpase);
    document.getElementById("containerHeight").style.height = newHeight+"px";
  }
}
