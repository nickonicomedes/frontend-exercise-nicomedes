import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiUrl = 'https://tworks-exercise-api.herokuapp.com/employee';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.apiUrl + '/list');
  }

  addEmployee(employee: Employee): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl + '/add', employee);
  }

  deleteEmployee(empId: string): Observable<any> {
    return this.httpClient.delete(this.apiUrl + '/delete/' + empId);
  }
}
