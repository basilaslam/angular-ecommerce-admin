import { Component, OnInit } from '@angular/core';
import { Order } from '../../../models/ApiOrderResponse';
import { OrderService } from '../../../services/order.service';
import { SubSink } from 'subsink';
import { HotToastService } from '@ngneat/hot-toast';

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css']
})



export class ListOrdersComponent implements OnInit{
  orders! : Order[]
  statusArray = ['PENDING' , 'DELIVERED' , 'CANCELLED']
  statusMap : { [orderId: string]: string } = {};
  subs = new SubSink()


constructor(private _orderService: OrderService,private _toast: HotToastService){}


  ngOnInit(): void {
      this.subs.add(this._orderService.getOrders(0, 100).subscribe(data => {
        this.orders = data.data.orders
      }))
  }

  updateStaus(event: Event, orderId: string){
    const targetElement= event.target as HTMLInputElement;
    const status = targetElement.value

    this.subs.add(this._orderService.updateOrderStatus(orderId, status).subscribe(data => {
      this._toast.success('📦order status updated')
    }))
  }


  ngOnDestroy(){
    this.subs.unsubscribe()
  }


}
