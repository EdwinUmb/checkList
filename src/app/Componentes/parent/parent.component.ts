import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  data: object = {};
  myForm: FormGroup;
  range: number;

  messageFromChild: string;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.range = 50000;
    this.createMyForm();
    this.myForm.patchValue({
      range: this.range,
    });
  }

  sendDataToChild(name: string, lastName: string) {
    this.data = {
      name: name,
      lastName: lastName,
    };

    return this.data;
  }

  receiveFromChild($event) {
    this.messageFromChild = $event;
  }

  createMyForm() {
    this.myForm = this.fb.group({
      range: [''],
    });
  }
  changeRange(e) {
    this.range = e.target.value;
  }
}
