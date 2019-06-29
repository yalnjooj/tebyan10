import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateserverService } from '../../../../../service/dateserver.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registerForm = new FormGroup({
    newaccType: new FormControl(null, [Validators.required]),
    newaccName: new FormControl(null, [Validators.required]),
    newemail: new FormControl(null, [Validators.email, Validators.required]),
    inputPassword1: new FormControl(null, [Validators.required]),
    inputPassword2: new FormControl(null, [Validators.required])
  }); 

  constructor(private DS: DateserverService, private _router: Router) { }


  ngOnInit() {
  }

  moveToLogin() {
    this._router.navigate(['/login']);
  }
  register() {
    if (!this.registerForm.valid || (this.registerForm.controls.inputPassword1.value != this.registerForm.controls.inputPassword2.value)) {
      console.log('Invalid Form'); return;
    }

    this.DS.register(JSON.stringify(this.registerForm.value)).subscribe(
      data=>{  this._router.navigate(['/home']);},  
     error=> console.error(error)
    );
    
   // console.log(JSON.stringify(this.registerForm.value));
  }




}
