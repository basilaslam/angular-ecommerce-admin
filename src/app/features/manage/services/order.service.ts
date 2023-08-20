import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { OrderApiResponse, SingleOrderResponseModel } from '../models/ApiOrderResponse';

@Injectable({
  providedIn: 'any'
})
export class OrderService {
  private baseUrl = `${environment.URI}/ecommerce/orders` as const;

  constructor(private http: HttpClient) {}

  // Fetch list of orders with filtering by status
  getOrders(page: number, limit: number): Observable<OrderApiResponse> {
    const params = new HttpParams()
      .set('page', page)
      .set('limit', limit);
    return this.http.get<OrderApiResponse>(`${this.baseUrl}/list/admin`, { params });
  }

  // Fetch order details by order ID
  getOrderById(orderId: string): Observable<SingleOrderResponseModel> {
    return this.http.get<SingleOrderResponseModel>(`${this.baseUrl}/${orderId}`);
  }


  updateOrderStatus(orderId: string, status: string): Observable<any> {
    return this.http.patch(`${this.baseUrl}/status/${orderId}`, status)
  }
}
