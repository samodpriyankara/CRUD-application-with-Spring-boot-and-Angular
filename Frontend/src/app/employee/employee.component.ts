import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { Employee } from '../register.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {


updateSave(employeeId : number ,employee: Employee) {
this.registrationService.updateUser(employeeId,employee).subscribe(
  (res) => {
    console.log(res);
    
  },
  (err) => {
    console.log(err);
    
  }
);
}

  
updateEmployee(employee: Employee) : void {
 this.employeeToUpdate = employee;
}

employeeToUpdate: Employee ={} as Employee;

deleteEmployee(employeeId : number) : void {


  console.log(employeeId);
  this.registrationService.deleteEmployee(employeeId).subscribe(
    {
      next:(res) => {
        console.log(res);
        
      },
      error : (err:HttpErrorResponse) => {
        console.log(err);
      }
    }
  )
  
}
constructor(
  private registrationService :RegistrationService,
  private router : Router
){
  this.getEmployeeList();
}
  ngOnInit(): void {
    
  }
  dataSource: Employee[] = [];
  displayedColumns: string[] = ['employeeId', 'employeeName', 'employeeContactNumber', 'employeeAddress','employeeGender', 'employeeSkill','employeeDepartment','edit','delete'];

  getEmployeeList() : void{
    this.registrationService.getAll().subscribe(
      {
        next : (res: Employee[]) => {
          console.log(res);
          this.dataSource = res;
        },
        error : (err:HttpErrorResponse) => {
          console.log(err);
          
        }
      }
    )
  }
}
