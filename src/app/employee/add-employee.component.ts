import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Employee} from "./employee";
import {EmployeeService} from "./employee.service";
import {Router} from "@angular/router";
import {MessagesService} from "../messages/messages.service";

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  employeeForm: FormGroup;

  constructor(private fb: FormBuilder, private employeeService: EmployeeService,
              private router: Router, private messageService: MessagesService) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      id: ['', Validators.required]
    });
  }

  addEmployee() {
    const value = this.employeeForm.value;
    let emp = new Employee();
    emp.firstName = value.firstName;
    emp.lastName = value.lastName;
    emp.email = value.email;
    emp.id = value.id;

    this.employeeService.addEmployee(emp).subscribe(res => {
      this.messageService.add(res.msg);
      this.router.navigate(['/employees']);
    }, error => {
      this.messageService.add(error.error.msg);
    });
  }
}
