import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  isRed = false;
  isBlue = false;
  isYellow = false;



  textRed() {
    this.isRed = !this.isRed;
  }

  textBlue() {
    this.isBlue = !this.isBlue;
  }


  textYellow() {
    this.isYellow = !this.isYellow;
  }

}
