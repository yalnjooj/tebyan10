import { Component, OnInit } from '@angular/core';
import { DateserverService } from 'src/app/service/dateserver.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reqnewcourse',
  templateUrl: './reqnewcourse.component.html',
  styleUrls: ['./reqnewcourse.component.css']
})
export class ReqnewcourseComponent implements OnInit {
  institutes;
  offOnInstitute: FormGroup;
  offOnSingle: FormGroup;

  constructor(private server: DateserverService) {}

  ngOnInit() {
    this.getOffOn();

    this.getReNewCourese();
  }

  getReNewCourese() {
    this.server.getReNewCourese().subscribe(
      data => {
        this.institutes = data;
      },
      err => {}
    );
  }
  // this.singleOffOn = data['instituteOffOn'];
  postSwitchInstitute() {
    this.server.postOffOn('offOnInstitute').subscribe(
      data => {
        this.offOnInstitute = new FormGroup({
          offOnInstitute: new FormControl(data['instituteOffOn'])
        });
      },
      err => err
    );
  }

  postSwitchSngle() {
    this.server.postOffOn('offOnSingle').subscribe(
      data => {
        this.offOnSingle = new FormGroup({
          offOnSingle: new FormControl(data['singleOffO'])
        });
      },
      err => err
    );
  }

  getOffOn() {
    this.offOnInstitute = new FormGroup({
      offOnInstitute: new FormControl(false)
    });
    this.offOnSingle = new FormGroup({
      offOnSingle: new FormControl(false)
    });

    this.server.getOffOn().subscribe(
      data => {
        this.offOnInstitute = new FormGroup({
          offOnInstitute: new FormControl(data['instituteOffOn'])
        });
        this.offOnSingle = new FormGroup({
          offOnSingle: new FormControl(data['singleOffO'])
        });
      },
      err => err
    );
  }
}
