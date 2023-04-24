import { Component, OnInit } from '@angular/core';
import { HolidarService } from 'src/app/services/holidar.service';

@Component({
  selector: 'app-publicholidays',
  templateUrl: './publicholidays.component.html',
  styleUrls: ['./publicholidays.component.css']
})
export class PublicholidaysComponent implements OnInit {

  resHoliday: any

  constructor(private holidayService: HolidarService) { }

  ngOnInit(): void {
  }

  getHolidays(){
    this.holidayService.getHolidays().subscribe(res => this.resHoliday = res)
  }

}
