import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-binding',
  templateUrl: './ng-binding.component.html',
  styleUrls: ['./ng-binding.component.scss']
})
export class NgBindingComponent implements OnInit {


  parentName = '';
  componentAge: number;
  constructor() { }

  ngOnInit() {
  }

  onAgeChange(e) {
    this.componentAge = e;
  }

}
