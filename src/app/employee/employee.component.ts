import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import {EmployeeService} from '../shared/employee.service';
import { Employee } from '../shared/employee.model';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[EmployeeService]
})
export class EmployeeComponent implements OnInit {

  _id:string;
  name:string;
  email:string;
  salary:number;
  designation:string;
  employee=new Employee();

  constructor(public employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.resetForm();
 }

  resetForm(form ?:NgForm){
    if(form)
      form.reset();
      this.employeeservice.selectedEmployee={
        _id:"",
        name:"",
        email:"",
        salary:null,
        designation:"",

      }

    
  }

  Add(e){
    e.preventDefault();
    this.employeeservice.postEmployee(this.employee).subscribe(res=>{
      console.log("data added successfully"+res);
    })
   
  }

}
