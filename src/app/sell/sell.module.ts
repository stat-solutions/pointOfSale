import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SellRoutingModule } from './sell-routing.module';
import { SellComponent } from './sell.component';

import { RouterModule } from '@angular/router';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SalesHistoryComponent } from './components/sales-history/sales-history.component';
import { CashManagementComponent } from './components/cash-management/cash-management.component';
import { StatusComponent } from './components/status/status.component';
import { SalesComponent } from './components/sales/sales.component';
import { SettingsComponent } from './components/settings/settings.component';




const appRoutes = [
];
@NgModule({
  declarations: [SellComponent,
    OpenCloseComponent,
    SalesHistoryComponent,
    CashManagementComponent,
    StatusComponent,
    SalesComponent,
    SettingsComponent],

  imports: [
    CommonModule,
    SellRoutingModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SellModule { }
