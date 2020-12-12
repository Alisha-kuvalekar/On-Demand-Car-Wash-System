import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { CustomerHomeComponent } from './Components/Customer/customer-home/customer-home.component';
import { CustomerdashboardComponent } from './Components/Customer/customerdashboard/customerdashboard.component';
import { CustomerprofileComponent } from './Components/Customer/customerprofile/customerprofile.component';
import { EditprofileComponent } from './Components/Customer/editprofile/editprofile.component';
import { LeaderboardComponent } from './Components/Customer/leaderboard/leaderboard.component';
import { MyordersComponent } from './Components/Customer/myorders/myorders.component';
import { OrderComponent } from './Components/Customer/order/order.component';
import { ScheduledOrderComponent } from './Components/Customer/scheduled-order/scheduled-order.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ServicesComponent } from './Components/services/services.component';
import { SignupComponent } from './Components/signup/signup.component';


import { AuthGuard } from './Guard/auth.guard';
import { WasherguardGuard } from './Guard/washerguard.guard';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'customerDashboard', component: CustomerdashboardComponent,canActivate: [AuthGuard]  , 
      children:[
        {path: 'customerProfile', component : CustomerprofileComponent,canActivate :[AuthGuard] },
        {path: 'editcustomerProfile', component: EditprofileComponent,canActivate :[AuthGuard]  },
        {path: 'customerHome', component: CustomerHomeComponent,canActivate :[AuthGuard] },
        {path: 'customerOrder',component: OrderComponent, canActivate :[AuthGuard] },
        {path: 'customerScheduledOrders', component: ScheduledOrderComponent, canActivate :[AuthGuard] },
        {path: 'customerOrders', component : MyordersComponent, canActivate :[AuthGuard] },
        {path: 'leaderboard', component: LeaderboardComponent, canActivate :[AuthGuard] }
      ]
  },
  { path: 'aboutUs', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents =[ HomeComponent,LoginComponent,SignupComponent,ServicesComponent, CustomerdashboardComponent, AboutusComponent, CustomerprofileComponent,
                                  CustomerHomeComponent, OrderComponent, ScheduledOrderComponent, MyordersComponent, LeaderboardComponent, EditprofileComponent];


