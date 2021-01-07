import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { SingleemployeeComponent } from './singleemployee/singleemployee.component';

const routes: Routes = [
  {path:'employee/edit/:_id',component:SingleemployeeComponent},
  {path:'employee',component:EmployeeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
