import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styles: [`
   h1{
    color: blue;  
   }`]
})

export class HelloWorldComponent {

  sherwood = false;
  name = "sherwood";
  status = false;
  obj = {
    user: '',
    pass: '',
  };

  styleStatus = true;

  sherwood_data = [{
      name: "alan",
      age: 19
    },
    {
      name: "Katarina",
      age: 21
    }
  ]

  getValues(value: any) {
    this.obj = value;
  }

  handleStatus() {

    this.status = !this.status;
 
  }

  handleStyle() {
    this.styleStatus = !this.styleStatus;
  }
}
