import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';
import { Test3Component } from './test3/test3.component';
import { Test4Component } from './test4/test4.component';

const routes: Routes = [
  {path:'getAllCategory',component:TestComponent},
  {path:'AddCategory',component:Test1Component},
  {path:'getCategoryById',component:Test2Component},
  {path:'getCategoryByUserName',component:Test3Component},
  {path:'getCategoryByAdvId',component:Test4Component},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
