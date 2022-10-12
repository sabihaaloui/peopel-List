import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PeopelListComponent } from './peopel-list/peopel-list.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'peopel-list',component:PeopelListComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
