import { Component, OnInit } from "@angular/core";
import { Day, WeekDays } from "../model";

@Component({
  selector: "app-calendar",
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  active = 2;
  days: Day[] = [
    { name: WeekDays[0], date: 1 },
    { name: WeekDays[1], date: 2 },
    { name: WeekDays[2], date: 3 },
    { name: WeekDays[3], date: 4 },
    { name: WeekDays[4], date: 5 },
    { name: WeekDays[5], date: 6 }
  ];
  constructor() {}

  ngOnInit() {}
}
