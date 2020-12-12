import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule}  from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { OrderComponent } from './Components/Customer/order/order.component';

import { AuthServiceService } from './Services/Customer/auth/auth-service.service';
import { TokenInterceptorService } from './Services/Customer/auth/token-interceptor.service';
import { PlansService } from './Services/plans/plans.service';
import { AuthService } from './Services/Washer/auth/auth.service';
import { OrderService } from './Services/Customer/order/order.service';
import { MyorderService } from './Services/Customer/myorder/myorder.service';


import { AuthGuard } from './Guard/auth.guard';



@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    AuthService,
    PlansService,
    OrderService,
    MyorderService,
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
