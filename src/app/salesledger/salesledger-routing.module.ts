import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalesledgerComponent } from './salesledger.component';

const routes: Routes = [{ path: '', component: SalesledgerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesledgerRoutingModule { }
