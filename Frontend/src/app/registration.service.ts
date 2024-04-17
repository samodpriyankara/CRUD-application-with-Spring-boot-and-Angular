import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { EmailValidator } from '@angular/forms';
import { Employee } from './register.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(
    private httpClient : HttpClient
  ) { }

BASE_URL = "http://localhost:8082/api/v1";

public saveRmployee(employee : Employee) :Observable<Employee>{
 return this.httpClient.post<Employee>(`${this.BASE_URL}/employee/save`,employee)

}
public getAll() :Observable<Employee[]>{
return this.httpClient.get<Employee[]>(`${this.BASE_URL}/employee/get-all`)
}

public deleteEmployee(employeeId : number){
  return this.httpClient.delete(`${this.BASE_URL}/employee/delete/${employeeId}`);
  }
  


public updateUser(id:number,employee : Employee){
  return this.httpClient.put(`${this.BASE_URL}/employee/update/${id}`,employee);
}

}
