import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DateserverService } from '../../../../../service/dateserver.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private DateserverService: DateserverService) {}

  
  ngOnInit() {
  }




 

// send data to the HTTP
  ngSubmit(f: NgForm) {
    if (f.valid) {
      console.log(f.value);
      this.DateserverService.addUser(f.value.newaccType, f.value.newaccName, f.value.newemail, f.value.inputPassword1)
    }

    else {
      console.log("خطأ في الادخال");
    }
  }  
  addUser(type, username, email, password) {
    this.addUser(type, username, email, password)
  }



}
