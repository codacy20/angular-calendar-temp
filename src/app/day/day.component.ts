import { Component, OnInit, Input } from "@angular/core";
import { Day } from "../model";
@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  @Input() active: boolean = false;
  @Input() day: Day;
  constructor() {}

  ngOnInit() {}
}
