import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateserverService } from '../../../service/dateserver.service';
import { ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  // this for closeing the model
  @ViewChild('closeBtn') closeBtn: ElementRef;

  noValue: String;
  searchResult = Object();
  searchError: String;
  isActiveMessage: String;
  anwersQuestions: Object;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  trainerForm: FormGroup = new FormGroup({
    trainerFild: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private _user: DateserverService) { }

  ngOnInit() {

    this.getAnwersQuestions();
    // resize the page
    this.height();
  }

  login() {
    if (!this.loginForm.valid) {
      console.log('خطأ في البيانات!'); return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this._user.login(JSON.stringify(this.loginForm.value))
      .subscribe(
        data => this.sowitchToPage(data),
        error => console.error(error)
      );
  }
  trainerFild() {
    if (!this.trainerForm.valid) {
      this.noValue = 'ادخل رقم الشهادة!';
    }
    else {
      this._user.trainerSearch(JSON.stringify(this.trainerForm.value))
        .subscribe(
          data => {
            if (data == null)
              this.searchError = 'لا توجد نتيجة!';
            else {
              this.searchResult = data;
              this.searchError = '';
              this.noValue = '';
            }
          },
          error => console.error('error' + error)
        );

    }
  }

  getAnwersQuestions() {
    this._user.getAnwersQuestions()
      .subscribe(
        data => this.anwersQuestions = data,
        error => console.error(error)
      );
  }

  clear() {
    this.searchResult.trainersName = '';
    this.searchResult.mark = '';
    this.searchResult.grade = '';
  }

  sowitchToPage(data) {
    if (!data.isActive) {
      this.isActiveMessage = "حسابك غير مفعل!";
    }

    else {

      // call this wherever you want to close modal
      this.closeBtn.nativeElement.click();

      switch (data.userType) {

        case "mainuser":
          this._router.navigate(['/home']);
          break;

        case "education":
          this._router.navigate(['/education']);
          break;

        case "development":
          this._router.navigate(['/development']);
          break;

        case "media":
          this._router.navigate(['/media']);
          break;

        case "institute":
          this._router.navigate(['/institute']);
          break;

        case "trainer":
          this._router.navigate(['/trainer']);
          break;

        case "supervisor":
          this._router.navigate(['/supervisor']);
          break;

        default:
          this._router.navigate(['/040']);
          break;
      }
    }

  }

  // height of hol page.
  height() {
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
    document.getElementById("containerHeight").style.height = newHeight + "px";
  }
}
