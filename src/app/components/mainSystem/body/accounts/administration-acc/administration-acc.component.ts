import { Component, OnInit } from '@angular/core';
import { DateserverService } from '../../../../../service/dateserver.service';

@Component({
  selector: 'app-administration-acc',
  templateUrl: './administration-acc.component.html',
  styleUrls: ['./administration-acc.component.css']
})
export class AdministrationAccComponent implements OnInit {
  users;

  constructor(private sarver: DateserverService) { }

  ngOnInit() {

    this.sarver.accountsData().subscribe(
      data => {
        this.users = data;
      },
     error => console.error(error)
    );
  }

  isActive(id){
    this.sarver.isActive(id).subscribe(
      data => {
        console.log(data);
      },
     error => console.error(error)
    );
  }

  deleteUser(id){
    this.sarver.removeUser(id).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
     error => console.error(error)
    );
  };

   ReSaveUser(id, username, email){
    let userInfo = {
      id: id,
      username: username.value,
      email: email.value
    };

   this.sarver.ReSaveUser(userInfo).subscribe(
    data => {
      console.log(data);
    },
   error => console.error(error)
  );

  }

  chengePass(id, pass){
    if(!pass.value)
    return;

    this.sarver.chengePass(id, pass.value).subscribe(
      data => {
        console.log(data);
        this.ngOnInit();
      },
     error => console.error(error)
    );

  }

}
