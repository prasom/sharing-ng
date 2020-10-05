import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-twoway-binding',
  templateUrl: './twoway-binding.component.html',
  styleUrls: ['./twoway-binding.component.scss']
})
export class TwowayBindingComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
