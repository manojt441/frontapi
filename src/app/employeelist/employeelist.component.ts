import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employees :any;

  constructor(public employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.getEmployeeData();
  }

  getEmployeeData(){
    this.employeeservice.getEmployee().subscribe(res=>{
     this.employees = res;
    //  console.log(this.taskarray[0].task_name);
     console.log(this.employees);


    })
  }

  deleteEmployee(id){
    this.employeeservice.deleteEmployee(id).subscribe(res=>{
      
      this.getEmployeeData();
    })
   }

}
