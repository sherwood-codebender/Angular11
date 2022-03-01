import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component'

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child: any;

  constructor() { }
  countDisplay: any;

  ngOnInit(): void {
  }


  receiveMessage(msg: string) {
    alert(msg);
  }

  receiveCount(count: string) {
    this.countDisplay = count;
  }

  ngAfterViewInit() {
    alert(this.child.count);
  }
}
