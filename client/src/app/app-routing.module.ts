import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { CustomerdashboardComponent } from './Components/Customer/customerdashboard/customerdashboard.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'customerDashboard', component: CustomerdashboardComponent},
  { path: 'aboutUs', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents =[ HomeComponent,LoginComponent,SignupComponent,ServicesComponent, CustomerdashboardComponent, AboutusComponent];


