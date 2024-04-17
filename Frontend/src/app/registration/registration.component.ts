import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../user';
import { Employee } from '../register.model';
import { NgForm } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  employee: Employee ={} as Employee;
  
  constructor(
    private registrationService: RegistrationService,
    private router : Router

  ){}

  ngOnInit(): void {
   
  }

  skills: string[] = [];

  selectGender(gender : string) : void{
    this.employee.employeeGender = gender;
  }

  onSkillsChanges(event : any) : void
{
  console.log(event);
  
  if(event.checked){
    this.skills.push(event.source.value)
  }else{
    this.skills.forEach(
      (item,index) => {
        if(item == event.source.value){
          this.skills.splice(index,1);
        }
        
      }
    );

  }
  this.employee.employeeSkill = this.skills.toString();
}

saveEmployee(employeeForm : NgForm) : void{
this.registrationService.saveRmployee(this.employee).subscribe(
  {
    next: (res:Employee) =>{
      console.log(res); 
      employeeForm.reset();
      this.employee.employeeGender = '';
      this.router.navigate(["/employees"]);
    },
    error: (err : HttpErrorResponse) => {
      console.log(err);
      
    }
  }
)
}

checkSkills(skill:string){
  return this.employee.employeeSkill != null && this.employee.employeeSkill.includes(skill);
}

}