import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';


@NgModule({
  declarations: [SellComponent],
  imports: [
    CommonModule,
    SellRoutingModule
  ]
})
export class SellModule { }
