import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { GroupsComponent } from './groups.component';
import { CustomerComponent } from './customer.component';
import { ImportCustomerComponent } from './import-customer.component';
import { AddCustomerComponent } from './add-customer.component';


@NgModule({
  declarations: [CustomersComponent, GroupsComponent, CustomerComponent, ImportCustomerComponent, AddCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
    
  ]
})
export class CustomersModule { }
