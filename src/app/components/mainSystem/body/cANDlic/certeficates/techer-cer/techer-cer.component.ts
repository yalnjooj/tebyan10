import { Component, OnInit } from '@angular/core';
import { DateserverService } from '../../../../../../service/dateserver.service';

@Component({
  selector: 'app-techer-cer',
  templateUrl: './techer-cer.component.html',
  styleUrls: ['./techer-cer.component.css']
})
export class TecherCerComponent implements OnInit {

  constructor( private serverData: DateserverService) { }
  trainersInfo: Object;
  ngOnInit() {
    this.getTrainersInfo();
  }

  getTrainersInfo() {
    
    this.serverData.getTrainersInfo()
      .subscribe(
        data => {this.trainersInfo = data;
          console.log(data);
        },
        error => console.error(error)
      );
  } 

}
