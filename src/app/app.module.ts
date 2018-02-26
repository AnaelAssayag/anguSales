import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CrmCustomersComponent } from './crm-customers/crm-customers.component';
import { CustomersService } from './customers.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CrmCustomersComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [CustomersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
