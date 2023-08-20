import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../../../shared/models/product.model';
import { Category } from '../add-product-modal/model/catogeries.model';
import { EditProductModalComponent } from '../edit-product-modal/edit-product-modal.component';
import { initFlowbite } from 'flowbite'
import { SubSink } from 'subsink';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit, OnDestroy{

  products!: Product[]
  categories!: Category[]
  categoryMap: { [categoryId: string]: string } = {};
  subs = new SubSink()
  @ViewChild(EditProductModalComponent) editDrawer!:EditProductModalComponent
  @ViewChild('deleteModal') deleteModal!: ElementRef
  deleteModalStatus = true


    constructor(private _productService: ProductService){}


    ngOnInit(): void {
      initFlowbite()
      this.fetchData()
    }

    fetchData(){
      this.subs.add(this._productService.getProducts(1, 100).subscribe(data => {
        this.products = data.data.products
        this.setupCategory()
       }))
      }

      setupCategory() {
        this.subs.add(this._productService.getCategories().subscribe(data => {
          this.categories = data.data.categories
          this.products.forEach(product => {
            const category = this.categories.find(val => val._id === product.category);
            if (category) {
              this.categoryMap[product._id] = category.name;
            } else {
              this.categoryMap[product._id] = 'Unknown Category';
            }
          });
        }))
      }

      getCategory(id:string){
        return this.categoryMap[id]
      }


    deleteProduct(id: string){




      this.subs.add(this._productService.deleteProduct(id).subscribe(data => {
        console.log(data);

        if (data.success) {
          const index = this.products.findIndex(product => product._id === id);

          if (index !== -1) {
            this.products.splice(index, 1);
          }
        }
      }))
    }

    updateDrawer(product: Product){
      this._productService.$product.next(product)
      this.editDrawer.drawerEvent()
    }


    ngOnDestroy(){
      this.subs.unsubscribe();
    }
  }
