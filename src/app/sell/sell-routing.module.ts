import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashManagementComponent } from './cash-management/cash-management.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { SalesHistoryComponent } from './sales-history/sales-history.component';

import { SellComponent } from './sell.component';
import { SettingsComponent } from './settings/settings.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [{ path: '', component: SellComponent }, 
{path: '/', component:SellComponent},
{path: 'open', component: OpenCloseComponent},
{path: 'salesHistory', component: SalesHistoryComponent},
{path: 'cashManagent', component: CashManagementComponent},
{path: 'status', component: StatusComponent},
{path: 'settings', component: SettingsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
