import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.css'],
})
export class FirstChildComponent implements OnInit {
  @Input() childProperty: any;
  @Output() messageEventFromChild = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  returnDataToParentFromChild(value: string) {
    this.messageEventFromChild.emit(value);
  }
}
