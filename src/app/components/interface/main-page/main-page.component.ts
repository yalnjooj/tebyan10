import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  noValue: string;
  searchResult = Object();
  searchError: string;
  isActiveMessage: string;
  anwersQuestions: Object;
  singleOffOn: boolean;
  instituteOffOn: boolean;

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.email, Validators.required]),
    password: new FormControl(null, Validators.required)
  });

  trainerForm: FormGroup = new FormGroup({
    trainerFild: new FormControl(null, Validators.required)
  });

  constructor(private _router: Router, private server: DateserverService) {}

  ngOnInit() {
    this.getOffOn();
    this.getAnwersQuestions();
    // resize the page
    this.height();
  }

  login() {
    if (!this.loginForm.valid) {
      console.log('خطأ في البيانات!');
      return;
    }

    // console.log(JSON.stringify(this.loginForm.value));
    this.server
      .login(this.loginForm.value)
      .subscribe(
        data => this.sowitchToPage(data),
        error => console.error(error)
      );
  }

  trainerFild() {
    if (!this.trainerForm.valid) {
      this.noValue = 'ادخل رقم الشهادة!';
    } else {
      this.server
        .trainerSearch(JSON.stringify(this.trainerForm.value))
        .subscribe(
          data => {
            if (data == null) this.searchError = 'لا توجد نتيجة!';
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
    this.server
      .getAnwersQuestions()
      .subscribe(
        data => (this.anwersQuestions = data),
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
      this.isActiveMessage = 'حسابك غير مفعل!';
    } else {
      // call this wherever you want to close modal
      this.closeBtn.nativeElement.click();

      switch (data.userType) {
        case 'mainuser':
          this._router.navigate(['/home']);
          break;

        case 'education':
          this._router.navigate(['/education']);
          break;

        case 'development':
          this._router.navigate(['/development']);
          break;

        case 'media':
          this._router.navigate(['/media']);
          break;

        case 'institute':
          this._router.navigate(['/institute']);
          break;

        case 'trainer':
          this._router.navigate(['/trainer']);
          break;

        case 'supervisor':
          this._router.navigate(['/supervisor']);
          break;

        default:
          this._router.navigate(['/040']);
          break;
      }
    }
  }

  getOffOn() {
    this.server.getOffOn().subscribe(
      data => {
        this.singleOffOn = data['singleOffO'];
        this.instituteOffOn = data['instituteOffOn'];
      },
      err => err
    );
  }

  // height of hol page.
  height() {
    // set height of body
    // offsetHeight -- clientHeight
    // window.innerHeight;
    // document.documentElement.clientHeight;
    const navbar = document.getElementById('navbar').clientHeight;
    const logosRow = document.getElementById('logosRow').clientHeight;
    const cenerSpases = document.getElementById('cenerSpase').clientHeight;
    const cenerSpase = cenerSpases + 0;

    const win = window.document.body.clientHeight;
    const newHeight = win - (navbar + logosRow + cenerSpase);
    document.getElementById('containerHeight').style.height = newHeight + 'px';
  }
}
