import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CustomersComponent } from './customers.component';
import { GroupsComponent } from  './groups.component';


const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customer', component: CustomerComponent },
  { path: 'groups', component: GroupsComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
