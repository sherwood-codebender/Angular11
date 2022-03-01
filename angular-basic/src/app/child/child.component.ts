import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string | undefined;
  @Output() messageEvent = new EventEmitter<string>();
  @Output() increaseEvent = new EventEmitter<any>();
  count: any = 0;
  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit('Hello from child');
  }

  countHandler() {
    this.count += 1;
    this.increaseEvent.emit(this.count);
  }
}
