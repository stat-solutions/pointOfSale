import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { BrandsComponent } from './brands/brands.component';
import { InventoryCountsComponent } from './inventory-counts/inventory-counts.component';
import { PriceBookComponent } from './price-book/price-book.component';
import { ProductTagsComponent } from './product-tags/product-tags.component';
import { ProductTypesComponent } from './product-types/product-types.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { StockControlComponent } from './stock-control/stock-control.component';
import { SuppliersComponent } from './suppliers/suppliers.component';


@NgModule({
  declarations: [ProductsComponent, BrandsComponent, InventoryCountsComponent, PriceBookComponent, ProductTagsComponent, ProductTypesComponent, PromotionsComponent, StockControlComponent, SuppliersComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
