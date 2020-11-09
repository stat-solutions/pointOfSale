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
<<<<<<< HEAD
import { SalesComponent } from './sales/sales.component';
=======
>>>>>>> 745fde9f2e13269d1238ecc53f71858ad5470bd0


const appRoutes = [
];
@NgModule({
  declarations: [SellComponent,
    OpenCloseComponent,
    SalesHistoryComponent,
    CashManagementComponent,
    StatusComponent,
<<<<<<< HEAD
    SettingsComponent,
    SalesComponent],
=======
    SettingsComponent],
>>>>>>> 745fde9f2e13269d1238ecc53f71858ad5470bd0
  imports: [
    CommonModule,
    SellRoutingModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class SellModule { }
