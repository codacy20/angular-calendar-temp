import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Day } from "../model";
@Component({
  selector: "app-day",
  templateUrl: "./day.component.html",
  styleUrls: ["./day.component.css"]
})
export class DayComponent implements OnInit {
  messageToSendC: string = "Hello Parent !";
  @Input() active: boolean = false;
  @Output() messageToEmit = new EventEmitter<string>();
  @Input() day: Day;
  constructor() {}

  ngOnInit() {}
  sendMessageToParent(message: string) {
    this.messageToEmit.emit(message);
  }
}
