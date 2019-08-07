import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DateserverService } from '../../../service/dateserver.service';
import { async } from 'q';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() sendData = new EventEmitter<object>();
  public posts = {};

  constructor(private DS: DateserverService, private router: Router) {
      this.DS.userisAuthenticate().subscribe(
      data => {},
      error => {this.DS.logout().subscribe(
          data => {},
          err => {});
          console.log('نتهت صلاحية الجلسة!!!');

        this.router.navigate(['/login']);
      }
    );
  }

  ngOnInit() {
    // this.DS.userisAuthenticate().subscribe(
    //   data => { this.posts = data; this.sendData.emit(data['id']); },
    //   error => { console.log(error); this.router.navigate(['/login']);
    //   }
    // );
  }

  logout() {
    this.DS.logout().subscribe(
      data => {
        this.router.navigate(['/login']);
      },
      error => {
        this.router.navigate(['/login']);
      }
    );
  }
}
