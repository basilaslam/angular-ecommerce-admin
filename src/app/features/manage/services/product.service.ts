import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AllProductsResponseModel, SingleProductsResponseModel } from '../models/ApiProductResponse';
import { Product } from 'src/app/shared/models/product.model';
import { CatogeryApiResponse } from '../components/smart/add-product-modal/model/catogeries.model';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 $product = new BehaviorSubject<Product | null>(null)

  private baseUrl = `${environment.URI}/ecommerce/products`;

  constructor(private http: HttpClient) {

  }

  getProducts(page: number, limit: number): Observable<AllProductsResponseModel> {
    const url = `${this.baseUrl}?page=${page}&limit=${limit}`;
    return this.http.get<AllProductsResponseModel>(url);
  }

  createProduct(productData: FormData): Observable<Product> {
    const url = `${this.baseUrl}`;
    return this.http.post<SingleProductsResponseModel>(url, productData).pipe(map((data)=> data.data));
  }

  deleteProduct(productId: string): Observable<SingleProductsResponseModel>{
    const url = `${this.baseUrl}/${productId}`;
    return this.http.delete<SingleProductsResponseModel>(url);
  }

  updateProduct(productId: string, productData: FormData): Observable<SingleProductsResponseModel> {
    const url = `${this.baseUrl}/${productId}`;
    return this.http.patch<SingleProductsResponseModel>(url, productData);
  }

  removeSubImage(productId: string, subImageId: string): Observable<SingleProductsResponseModel> {
    const url = `${this.baseUrl}/remove/subimage/${productId}/${subImageId}`;
    return this.http.patch<SingleProductsResponseModel>(url, {});
  }

  getCategories(): Observable<CatogeryApiResponse>{
    const url = `${environment.URI}/ecommerce/categories`
    return this.http.get<CatogeryApiResponse>(url)
  }

}
