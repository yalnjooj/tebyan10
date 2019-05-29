import { Component, OnInit } from '@angular/core';

@Component({
    
  })

export class Validation implements OnInit {

  constructor() { }

  ngOnInit() {
  }


    valpass(pass1: String, pass2: String) {
    if (pass1 != pass2) {
        return "كملة المرور غير متطابقة"
    }
}

    

}


