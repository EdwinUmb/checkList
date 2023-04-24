import { Component, OnInit } from '@angular/core';
import { calculatorAddRequest } from 'src/app/models/calculator.request';
import { WsdlService } from 'src/app/services/wsdl.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  constructor(private calculatorService: WsdlService) {}

  ngOnInit(): void {}

  // async calculatorAdd(numberA: string, numberB: string) {
  //   console.log(numberA, numberB);
  //   let calculatorAddRequest: calculatorAddRequest = {
  //     intA: numberA,
  //     intB: numberB,
  //   };

  //   try {
  //     let response = await this.calculatorService.calculatorAdd(
  //       calculatorAddRequest
  //     );
  //   } catch (error) {}
  // }

  sendDatatoChild() {}
}
