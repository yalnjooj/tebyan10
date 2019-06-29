import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { DateserverService } from '../../../service/dateserver.service';
import { TrasferOfDataService } from '../../../service/trasfer-of-data.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datahead = new Object()

  constructor() { }



  ngOnInit() {

  }

  receiveMessage($event){
    this.datahead = $event;
    console.log(this.datahead);
    
  }



  // اعادة تعيين حجم الصحفة
  height() {
    // set height of body
    // offsetHeight -- clientHeight
    //window.innerHeight; 
    // document.documentElement.clientHeight;
    let navbar = document.getElementById('navbar-h').clientHeight;
    let logosRow = document.getElementById('bodyRow-h').clientHeight;
    let cenerSpase = document.getElementById('footer-h').clientHeight;
    let win = window.document.body.clientHeight;
    let newHeight = win - (navbar + logosRow + cenerSpase);

    document.getElementById("containerHeight").style.height = newHeight + "px";
    document.getElementById("bodyRow-h").style.height = 524 + "px";

  }

}

