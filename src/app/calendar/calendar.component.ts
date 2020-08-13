import { Component, OnInit } from "@angular/core";
import { Day, WeekDays } from "../model";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  DAY = 86400000;
  active = 2;
  days: Day[] = [
    { name: this.getDay(-2), date: this.getDate(-2) },
    { name: this.getDay(-1), date: this.getDate(-1) },
    { name: this.getDay(0), date: this.getDate(0) },
    { name: this.getDay(1), date: this.getDate(1) },
    { name: this.getDay(2), date: this.getDate(2) },
    { name: this.getDay(3), date: this.getDate(3) }
  ];
  constructor() {}

  getMessage(index: number) {
    this.active = index;
  }

  getDate(index: number) {
    return new Date(Date.now() + index * this.DAY).getDate();
  }

  getDay(index: number) {
    return WeekDays[new Date(Date.now() + index * this.DAY).getDay()];
  }

  ngOnInit() {}
}
