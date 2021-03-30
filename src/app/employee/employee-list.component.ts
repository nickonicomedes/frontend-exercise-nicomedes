import { Component, OnInit } from '@angular/core';
import {EmployeeService} from "./employee.service";
import {Employee} from "./employee";
import {MessagesService} from "../messages/messages.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];

  constructor(private employeeService: EmployeeService, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.loadEmployees();
  }

  delete(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(res => {
      if (res.success) {
        this.loadEmployees();
      }
    }, error => {
      this.messageService.add(error.error.msg);
    })
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe(res => {
      this.employees = res;
    }, error => {
      this.messageService.add(error.error.msg);
    });
  }
}
