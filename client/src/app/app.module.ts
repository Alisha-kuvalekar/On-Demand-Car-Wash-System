import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CustomerprofileComponent } from './Components/Customer/customerprofile/customerprofile.component';
import { OrderComponent } from './Components/Customer/order/order.component';



@NgModule({ 
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    routingComponents,
    CustomerprofileComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
