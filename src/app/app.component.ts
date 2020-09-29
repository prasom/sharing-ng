import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'share-ngclass';
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
