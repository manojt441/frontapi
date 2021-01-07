import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../shared/employee.model';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-singleemployee',
  templateUrl: './singleemployee.component.html',
  styleUrls: ['./singleemployee.component.css']
})
export class SingleemployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,private route: ActivatedRoute) { }

  id:any;
  employeeData:any;
  employee=new Employee();



  ngOnInit(): void {
    this.id=this.route.snapshot.params._id;
    console.log(this.id);
    this.getOneRecord();
  }


  getOneRecord(){

    this.employeeservice.getOneEmployeee(this.id).subscribe(res=>{

      this.employeeData=res;

      this.employeeservice=this.employeeData;
            console.log(this.employeeservice);


    })
  }

}
