import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template:`
  <h1 *ngIf = "sherwood"> {{name}} </h1>
  <table border="1">
    <thead>
     
        <th>Name</th>
      <th>Age</th>
 
    </thead>
    <tr *ngFor="let item of sherwood_data">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
    </tr>
  </table>

`
  ,
  styles: [`
   h1{
    color: blue;  
   }`]
})

export class HelloWorldComponent {

  sherwood = false;
  name = "sherwood";
  
  sherwood_data = [{
      name: "alan",
      age: 19
    },
    {
      name: "Katarina",
      age: 21
    }
  ]
}
