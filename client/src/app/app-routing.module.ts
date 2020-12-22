import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutusComponent } from './Components/aboutus/aboutus.component';
import { AddonManagementComponent } from './Components/Admin/addon-management/addon-management.component';
import { AdminDashboardComponent } from './Components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './Components/Admin/admin-home/admin-home.component';
import { AdminLoginComponent } from './Components/Admin/admin-login/admin-login.component';
import { CarsManagementComponent } from './Components/Admin/cars-management/cars-management.component';
import { CreatPlanComponent } from './Components/Admin/creat-plan/creat-plan.component';
import { CreateAddonComponent } from './Components/Admin/create-addon/create-addon.component';
import { CreateCarComponent } from './Components/Admin/create-car/create-car.component';
import { EditAddonComponent } from './Components/Admin/edit-addon/edit-addon.component';
import { EditCarComponent } from './Components/Admin/edit-car/edit-car.component';
import { EditPlanComponent } from './Components/Admin/edit-plan/edit-plan.component';
import { PlansManagementComponent } from './Components/Admin/plans-management/plans-management.component';
import { WasherApprovalComponent } from './Components/Admin/washer-approval/washer-approval.component';
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
import { WasherEditProfileComponent } from './Components/Washer/washer-edit-profile/washer-edit-profile.component';
import { WasherHomeComponent } from './Components/Washer/washer-home/washer-home.component';
import { WasherMyOrdersComponent } from './Components/Washer/washer-my-orders/washer-my-orders.component';
import { WasherScheduledOrdersComponent } from './Components/Washer/washer-scheduled-orders/washer-scheduled-orders.component';
import { WasherdashboardComponent } from './Components/Washer/washerdashboard/washerdashboard.component';
import { WasherprofileComponent } from './Components/Washer/washerprofile/washerprofile.component';
import { WashrequestsComponent } from './Components/Washer/washrequests/washrequests.component';
import { AdminGuardGuard } from './Guard/admin-guard.guard';



import { AuthGuard } from './Guard/auth.guard';
import { WasherguardGuard } from './Guard/washerguard.guard';

const routes: Routes = [
  { path: '', redirectTo:'home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'signup', component: SignupComponent},
  { path: 'login', component: LoginComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'aboutUs', component: AboutusComponent},
  { path :'admin', component : AdminLoginComponent},
  { path : 'adminDashboard', component:AdminDashboardComponent, canActivate:[AdminGuardGuard],
      children:[
        {path: 'adminHome',component: AdminHomeComponent, canActivate:[AdminGuardGuard]},
        {path :'adminPlans',component: PlansManagementComponent, canActivate:[AdminGuardGuard]},
        {path :'createPlan', component: CreatPlanComponent, canActivate:[AdminGuardGuard]},
        {path : 'editPlan/:id', component: EditPlanComponent, canActivate:[AdminGuardGuard]},
        {path :'adminAddons', component: AddonManagementComponent, canActivate:[AdminGuardGuard]},
        {path : 'createAddon', component : CreateAddonComponent, canActivate:[AdminGuardGuard]},
        {path : 'editAddon/:id', component: EditAddonComponent, canActivate:[AdminGuardGuard] },
        {path: 'washerApproval', component : WasherApprovalComponent, canActivate:[AdminGuardGuard]},
        {path :'adminCars', component :CarsManagementComponent, canActivate:[AdminGuardGuard]},
        {path :'createCar', component: CreateCarComponent, canActivate:[AdminGuardGuard]},
        {path : 'editCar/:id', component : EditCarComponent, canActivate:[AdminGuardGuard]}
      ]
  },
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
  { path: 'washerDashboard', component:WasherdashboardComponent,  canActivate:[WasherguardGuard],
      children:[
        {path: 'washerHome', component: WasherHomeComponent,  canActivate:[WasherguardGuard]},
        {path: 'washerProfile', component: WasherprofileComponent,  canActivate:[WasherguardGuard] },
        {path: 'editwasherProfile', component: WasherEditProfileComponent,  canActivate:[WasherguardGuard]},
        {path: 'washRequests', component: WashrequestsComponent,  canActivate:[WasherguardGuard]},
        {path: 'washerMyOrders',component: WasherMyOrdersComponent,  canActivate:[WasherguardGuard]},
        {path: 'washerScheduledOrders', component: WasherScheduledOrdersComponent,  canActivate:[WasherguardGuard]}
      ]  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents =[ HomeComponent,LoginComponent,SignupComponent,ServicesComponent, CustomerdashboardComponent, AboutusComponent, CustomerprofileComponent,
                                  CustomerHomeComponent, OrderComponent, ScheduledOrderComponent, MyordersComponent, LeaderboardComponent, EditprofileComponent,
                                  WasherdashboardComponent,WasherprofileComponent,WasherEditProfileComponent,WashrequestsComponent,WasherMyOrdersComponent,
                                  WasherScheduledOrdersComponent, WasherHomeComponent, AdminDashboardComponent, AdminHomeComponent, PlansManagementComponent, CreatPlanComponent,
                                  EditPlanComponent,AddonManagementComponent,CreateAddonComponent,EditAddonComponent,WasherApprovalComponent, CarsManagementComponent, CreateCarComponent,
                                  EditCarComponent, AdminLoginComponent];


