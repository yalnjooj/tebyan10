import { Component, OnInit } from '@angular/core';
import { DateserverService } from '../../../../../service/dateserver.service';

@Component({
  selector: 'app-viow-cq',
  templateUrl: './viow-cq.component.html',
  styleUrls: ['./viow-cq.component.css']
})
export class ViowCQComponent implements OnInit {

  anwersQuestions: Object;


  constructor( private serverData: DateserverService) { }

  ngOnInit() {
    this.getAnwersQuestions();
  }

  getAnwersQuestions() {
    this.serverData.getAnwersQuestions()
      .subscribe(
        data => this.anwersQuestions = data,
        error => console.error(error)
      );
  } 

}
