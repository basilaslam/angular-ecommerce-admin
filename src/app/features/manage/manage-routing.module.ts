import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageComponent } from './manage.component';
import { ListOrdersComponent } from './components/smart/list-orders/list-orders.component';
import { ListProductsComponent } from './components/smart/list-products/list-products.component';

const routes: Routes = [{ path: '', component: ManageComponent, children: [
  {path: 'orders', component: ListOrdersComponent},
  {path: 'products', component: ListProductsComponent},
] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
