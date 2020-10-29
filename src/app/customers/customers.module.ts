import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { GroupsComponent } from './groups.component';
import { CustomerComponent } from './customer.component';


@NgModule({
  declarations: [CustomersComponent, GroupsComponent, CustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule
    
  ]
})
export class CustomersModule { }
