import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from "./employee/employee-list.component";
import {AddEmployeeComponent} from "./employee/add-employee.component";

const routes: Routes = [
  { path: 'employees', component: EmployeeListComponent},
  { path: 'add-employee', component: AddEmployeeComponent},
  {path: '', redirectTo: '/employees', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
