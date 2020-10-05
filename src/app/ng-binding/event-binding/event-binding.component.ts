import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss']
})
export class EventBindingComponent implements OnInit {

  @Output() ageChange = new EventEmitter<number>();

  age: number;
  constructor() { }

  ngOnInit() {
  }

  submitAge() {
    this.ageChange.emit(this.age);
  }

}
