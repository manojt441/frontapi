import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';
import { Employee } from './employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  selectedEmployee:Employee;
  employees:Employee[];
  readonly baseURL="http://localhost:3001/employees/"

  constructor(private http :HttpClient) { 
    // let headers: HttpHeaders = new HttpHeaders();
    // headers = headers.append('enctype', 'multipart/form-data');
    // headers = headers.append('Content-Type', 'application/json');
    // headers = headers.append('X-Requested-With', 'XMLHttpRequest');
  }

  postEmployee(emp :Employee){
     return this.http.post(this.baseURL+'/save',emp);
  }


  getEmployee():Observable<Employee[]>
  {

    // const newTask = new Task();
    return this.http.get<Employee[]>(this.baseURL);
  }

  deleteEmployee(id){
    return this.http.delete(this.baseURL+'delete/'+id);

  }

  getOneEmployeee(id){
    return this.http.get(this.baseURL+id);

  }

  UpdateTask(id,emp):Observable<Employee>
  {
    return this.http.put<Employee>(this.baseURL+id,emp);
  }
}
