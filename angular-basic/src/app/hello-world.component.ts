import { Component, OnInit, NgModule } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  template: `
<input type="text" [(ngModel)] = "title" />
           <h1>{{title}}</h1>
`,
  styles: [`
   h1{
    color: blue;  
   }`]
})

export class HelloWorldComponent {
  title = "";

  
  
}
