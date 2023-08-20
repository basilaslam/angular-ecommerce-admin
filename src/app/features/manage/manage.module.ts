import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ManageRoutingModule } from './manage-routing.module';
import { ManageComponent } from './manage.component';
import { ListOrdersComponent } from './components/smart/list-orders/list-orders.component';
import { ListProductsComponent } from './components/smart/list-products/list-products.component';
import { AddProductModalComponent } from './components/smart/add-product-modal/add-product-modal.component';
import { DeleteProductModalComponent } from './components/smart/delete-product-modal/delete-product-modal.component';
import { EditProductModalComponent } from './components/smart/edit-product-modal/edit-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ManageComponent,
    ListOrdersComponent,
    ListProductsComponent,
    AddProductModalComponent,
    DeleteProductModalComponent,
    EditProductModalComponent,
  ],
  imports: [
    CommonModule,
    ManageRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ManageModule { }
