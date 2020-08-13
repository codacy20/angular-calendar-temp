import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Day } from "../model";
@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  @Input() index = 0;
  @Input() active: boolean = false;
  @Output() messageToEmit = new EventEmitter<number>();
  @Input() day: Day;
  constructor() {}

  ngOnInit() {}
  sendMessageToParent(message: number) {
    this.messageToEmit.emit(this.index);
  }
}
