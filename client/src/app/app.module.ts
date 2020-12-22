import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule}  from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';


import { AuthServiceService } from './Services/Customer/auth/auth-service.service';
import { TokenInterceptorService } from './Services/Customer/auth/token-interceptor.service';
import { PlansService } from './Services/plans/plans.service';
import { AuthService } from './Services/Washer/auth/auth.service';
import { OrderService } from './Services/Customer/order/order.service';
import { MyorderService } from './Services/Customer/myorder/myorder.service';
import { AddonManagementService } from './Services/Admin/addonsManagement/addon-management.service';
import { AdminAuthServiceService } from './Services/Admin/auth/admin-auth-service.service';
import { CarManagementService } from './Services/Admin/carsManagement/car-management.service';
import { CustomercountService } from './Services/Admin/customercount/customercount.service';
import { OrderscountService } from './Services/Admin/orderCount/orderscount.service';
import { PlanManagementService } from './Services/Admin/planManagement/plan-management.service';
import { WasherapprovalService } from './Services/Admin/washerApproval/washerapproval.service';
import { LeaderboardService } from './Services/Customer/leaderboard/leaderboard.service';
import { ProfileService } from './Services/Customer/profile/profile.service';
import { WasherMyorderService } from './Services/Washer/myorders/washer-myorder.service';



import { AuthGuard } from './Guard/auth.guard';
import { WashrequestService } from './Services/Washer/washrequests/washrequest.service';



@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [
    AuthServiceService,
    AuthService,
    PlansService,
    OrderService,
    MyorderService,
    AddonManagementService,
    AdminAuthServiceService,
    CarManagementService,
    CustomercountService,
    OrderscountService,
    PlanManagementService,
    WasherapprovalService,
    LeaderboardService,
    ProfileService,
    WasherMyorderService,
    WashrequestService,
  
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
