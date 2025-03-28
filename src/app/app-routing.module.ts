import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { StudentRegisterComponent } from './pages/student-register/student-register.component';

const routes: Routes = [
  {
    path:"login",component:LoginComponent
  },
  {
    path:"register",component:StudentRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
