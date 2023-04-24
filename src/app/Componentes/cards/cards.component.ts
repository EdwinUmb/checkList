import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  maxRange: number = 0;
  minRange: number = 0;
  step: number = 0;
  cantidad: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.maxRange = 10000;
    this.minRange = 2000;
    this.step = 500;
  }

  setQuantity(value) {
    this.cantidad = value;
  }

  hola() {
    console.log('hola');
  }
}
