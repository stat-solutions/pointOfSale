import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrandsComponent } from './brands/brands.component';
import { InventoryCountsComponent } from './inventory-counts/inventory-counts.component';
import { PriceBookComponent } from './price-book/price-book.component';
import { ProductTagsComponent } from './product-tags/product-tags.component';
import { ProductTypesComponent } from './product-types/product-types.component';

import { ProductsComponent } from './products.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StockControlComponent } from './stock-control/stock-control.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

<<<<<<< HEAD
const routes: Routes = [{ path: '', component: ProductsComponent }
=======
const routes: Routes = [{ path: '', component: ProductsComponent },
{ path: 'brands', component: BrandsComponent },
{ path: 'inventoryCounts', component: InventoryCountsComponent },
{ path: 'priceBook', component: PriceBookComponent },
{ path: 'productTags', component: ProductTagsComponent },
{ path: 'productTypes', component: ProductTypesComponent },
// { path: 'promotions', component: PromotionsComponent },
{ path: 'stockControl', component: StockControlComponent },
{ path: 'suppliers', component: SuppliersComponent },
>>>>>>> 745fde9f2e13269d1238ecc53f71858ad5470bd0
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
