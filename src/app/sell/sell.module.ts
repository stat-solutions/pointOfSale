import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
import { CashManagementComponent } from './cash-management/cash-management.component';
import { StatusComponent } from './status/status.component';
import { SettingsComponent } from './settings/settings.component';
import { RouterModule } from '@angular/router';
import { SalesComponent } from './sales/sales.component';


const appRoutes = [
];
@NgModule({
  declarations: [SellComponent,
    OpenCloseComponent,
    SalesHistoryComponent,
    CashManagementComponent,
    StatusComponent,
    SettingsComponent,
    SalesComponent],
  imports: [
    CommonModule,
    SellRoutingModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SellModule { }
