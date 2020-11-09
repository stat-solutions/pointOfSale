import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { Routes, RouterModule } from '@angular/router';
import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { GroupsComponent } from './groups.component';
import { CustomerComponent } from './customer.component';
import { ImportCustomerComponent } from './import-customer.component';

import { FormsModule } from '@angular/forms';
//import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [CustomersComponent, GroupsComponent, CustomerComponent, ImportCustomerComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    FormsModule
    //BrowserModule,
    
    
    
  ]
  //providers: [],
  //bootstrap: [CustomerComponent]
})
export class CustomersModule { }
