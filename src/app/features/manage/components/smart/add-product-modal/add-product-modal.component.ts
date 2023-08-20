import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Category } from './model/catogeries.model';
import { Drawer, DrawerOptions } from 'flowbite';
import { SubSink } from 'subsink';
@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit, OnDestroy{
  @Output() refreashData = new EventEmitter()
  subs = new SubSink()
  productForm: any;
  categories!: Category[]
  subImages : string[] = []
  mainImage! : string
  @ViewChild('createProductDrawer', { static: false }) createProductDrawer!: ElementRef;

  constructor(private fb: FormBuilder, private _productService: ProductService, ) {
    this.productForm = this.fb.group({
      name: [''],
      description: [''],
      price: [''],
      stock: [''],
      category: [''],
    });
  }


  ngOnInit(){
    this.getCategories()
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

    const formData = this.settingUpToSubmit()
    console.log(JSON.stringify(formData))

      this.subs.add(this._productService.createProduct(formData).subscribe(data => {

        if(data._id){
          this.refreashData.emit()
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


    ngOnDestroy(): void {
        this.subs.unsubscribe()
    }

  }
