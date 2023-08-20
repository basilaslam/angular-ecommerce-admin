import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { FormBuilder } from '@angular/forms';
import { Category } from '../add-product-modal/model/catogeries.model';
import { Product } from 'src/app/shared/models/product.model';
import { Store, select } from '@ngrx/store';
import { AppStateInterface } from 'src/app/types/appState.interface';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-edit-product-modal',
  templateUrl: './edit-product-modal.component.html',
  styleUrls: ['./edit-product-modal.component.css']
})
export class EditProductModalComponent implements OnInit, OnDestroy{
  @Output() refreashData = new EventEmitter()
  subs = new SubSink()
  isVisible =  false
  $product!: Product | null
  productForm: any;
  categories!: Category[]
  subImages : string[] = []
  mainImage! : string
  constructor( private store: Store<AppStateInterface>, private fb: FormBuilder, private _productService: ProductService, ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      category: [''],
    });
  }


  ngOnInit(){
    this.subs.add(this._productService.$product.subscribe(data => {

      this.$product = data
      this.getCategories()
     data&&this.populateFormWithProduct(data)
     }))
  }

  populateFormWithProduct(product: Product) {
    this.subs.add(this.productForm.patchValue({
      name: product.name,
      description: product.description,
      price: product.price,
      stock: product.stock,
      category: product.category,
    }))
  }


  getCategories(){
    this.subs.add(this._productService.getCategories().subscribe(data => {
      this.categories = data.data.categories
    }))
  }

  settingUpToSubmit(){
    const formData = new FormData();

    for (var i = 0; i < this.subImages.length; i++) {
      formData.append("subImages", this.subImages[i]);
    }
    formData.append('mainImage', this.mainImage)
    formData.append('name', this.productForm.value.name);
    formData.append('description', this.productForm.value.description);
    formData.append('price', this.productForm.value.price);
    formData.append('stock', this.productForm.value.stock);
    formData.append('category', this.productForm.value.category);
    formData.append('mainImage', this.mainImage);

    formData.forEach((value)=>{
      console.log(value);
    })

    return formData
  }

  onSubmit() {
      if(!this.$product?._id) return console.log('no product selected');

    const formData = this.settingUpToSubmit()

      this.subs.add(this._productService.updateProduct(this.$product?._id,formData).subscribe(data => {

        if(data.success){

          this.refreashData.emit()
          this.drawerEvent()
        }
      }))

  }

    subfileChange(event: any){
      for (var i = 0; i < event.target.files.length; i++) {
        this.subImages.push(event.target.files[i]);
    }

    }
    mainfileChange(event: any){
        this.mainImage = event.target.files[0]
    }

    drawerEvent(){
      this.isVisible = !this.isVisible
      console.log('this.isVisible', this.isVisible)
    }

    ngOnDestroy(): void {
        this.subs.unsubscribe()
    }
}
