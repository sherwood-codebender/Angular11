import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: '**',
    component: UserComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
