import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrasferOfDataService {

  id;
  __v;
  username;
  userType;
  password;
  isActive;
  email;
  creation_dt;

  fo = {
    id: this.id,
    __v: this.__v,
    username: this.username,
    userType: this.userType,
    password: this.password,
    isActive: this.isActive,
    email: this.email,
    creation_dt: this.creation_dt
  }
dd;
  dataSet(data) {

   return this.dd =JSON.parse(JSON.stringify(data));
    
  }

   dataGet() {     
    console.log(this.dd);
    
  }
}
