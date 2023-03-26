import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { EntryComponent } from './entry/entry.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  {path:'',redirectTo:'/entry/register',pathMatch:'full'},
  {path:'entry',component:EntryComponent,children:[
    {path:'register',component:RegisterComponent},
    {path:'login',component:LoginComponent}
  ]},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard],children:[
    {path:'list',component:ListComponent},
    {path:'user',component:UserDetailsComponent}
  ]},
  
  // {path:'register',component:RegisterComponent},
  // {path:'login',component:LoginComponent},
  // {path:'list',component:ListComponent},
  // {path:'home',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
