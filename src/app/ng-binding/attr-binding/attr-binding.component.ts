import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-binding',
  templateUrl: './attr-binding.component.html',
  styleUrls: ['./attr-binding.component.scss']
})
export class AttrBindingComponent implements OnInit {

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
