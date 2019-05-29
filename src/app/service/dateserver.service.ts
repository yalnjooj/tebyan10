import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DateserverService {

  url = 'http://localhost:4000/nodejsconnect';

  constructor(private http: HttpClient) { }

  addUser(type, username, email, password) {
    const obj = {
      typeK: type,
      username: username,
      email: email,
      password: password,
      isActive: false,
      reguteDdate: Date.now()
    };
    console.log(obj);
    this.http.post(`${this.url}/addnewuser`, obj)
      .subscribe(res => console.log('Done'));
  }

}
