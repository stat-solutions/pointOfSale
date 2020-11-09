import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashManagementComponent } from './cash-management/cash-management.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';
<<<<<<< HEAD
import { SalesComponent } from './sales/sales.component';
=======
>>>>>>> 745fde9f2e13269d1238ecc53f71858ad5470bd0

import { SellComponent } from './sell.component';
import { SettingsComponent } from './settings/settings.component';
import { StatusComponent } from './status/status.component';

<<<<<<< HEAD
const routes: Routes = [{
  path: '', component: SellComponent,
  children: [
    { path: 'open', component: OpenCloseComponent },
    { path: 'salesHistory', component: SalesHistoryComponent },
    { path: 'cashManagent', component: CashManagementComponent },
    { path: 'status', component: StatusComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'sales', component: SalesComponent}
  ]
}];
=======
const routes: Routes = [{ path: '', component: SellComponent }, 
{path: 'open', component: OpenCloseComponent},
{path: 'salesHistory', component: SalesHistoryComponent},
{path: 'cashManagent', component: CashManagementComponent},
{path: 'status', component: StatusComponent},
{path: 'settings', component: SettingsComponent}];
>>>>>>> 745fde9f2e13269d1238ecc53f71858ad5470bd0

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
