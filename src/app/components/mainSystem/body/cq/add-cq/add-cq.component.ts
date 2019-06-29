import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateserverService } from '../../../../../service/dateserver.service';

@Component({
  selector: 'app-add-cq',
  templateUrl: './add-cq.component.html',
  styleUrls: ['./add-cq.component.css']
})
export class AddCQComponent implements OnInit {

  constructor( private _server: DateserverService) { }

  ngOnInit() {
  }

  insertQuestions: FormGroup = new FormGroup({
    quistion: new FormControl(null, Validators.required),
    answer: new FormControl(null, Validators.required),
    isView: new FormControl(null, Validators.required)
  });

  insertQuestion() {
    if (!this.insertQuestions.valid) {
      console.log(this.insertQuestions.value);
    }
    else {
      this._server.insertQuestion(JSON.stringify(this.insertQuestions.value))
      .subscribe(
          data => console.log(data),
          error => console.error('error' + error)
        );
      }
  }

}