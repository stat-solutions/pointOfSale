import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashManagementComponent } from './components/cash-management/cash-management.component';
import { OpenCloseComponent } from './components/open-close/open-close.component';
import { SalesHistoryComponent } from './components/sales-history/sales-history.component';
import { SalesComponent } from './components/sales/sales.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StatusComponent } from './components/status/status.component';



import { SellComponent } from './sell.component';

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

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellRoutingModule { }
