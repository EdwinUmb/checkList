import { Injectable } from '@angular/core';

import { calculatorAddRequest } from '../models/calculator.request';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WsdlService {
  uri = 'http://www.dneonline.com/calculator.asmx';

  constructor(private http: HttpClient) {}

  // public calculatorAdd(
  //   calculatorAddRequest: calculatorAddRequest
  // ): Promise<any> {
  //   let body = `
  //   <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:tem="http://tempuri.org/">
  //     <soapenv:Header/>
  //       <soapenv:Body>
  //         <tem:Add>
  //           <tem:intA>${calculatorAddRequest.intA}</tem:intA>
  //           <tem:intB>${calculatorAddRequest.intB}</tem:intB>
  //         </tem:Add>
  //       </soapenv:Body>
  //     </soapenv:Envelope>
  //   `;
  //   console.log(body);

  //   let options: object = { responseType: 'text' };

  //   let headers = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'text',
  //     }),
  //   };

  //   return this.http.post(this.uri, body, headers).subscribe((data) => {
  //     console.log('data in wsdl service', data);
  //   })
  // }
}
