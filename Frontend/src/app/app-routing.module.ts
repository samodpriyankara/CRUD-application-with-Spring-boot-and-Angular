import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EmployeeComponent } from './employee/employee.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"header",component:HeaderComponent},
  {path:"employees",component:EmployeeComponent},
  {path:"register",component:RegistrationComponent},
  {path:"login",redirectTo:"register",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
