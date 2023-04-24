import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HolidarService {

  constructor(private http: HttpClient) { }

  getHolidays(){
    return this.http.get('https://date.nager.at/api/v2/publicholidays/2020/US')
  }

}
