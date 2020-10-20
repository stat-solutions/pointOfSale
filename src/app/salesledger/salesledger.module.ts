import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesledgerRoutingModule } from './salesledger-routing.module';
import { SalesledgerComponent } from './salesledger.component';


@NgModule({
  declarations: [SalesledgerComponent],
  imports: [
    CommonModule,
    SalesledgerRoutingModule
  ]
})
export class SalesledgerModule { }
