/* THIS COMPONENT MANAGES THE ORDER (ONE SINGLE ORDER) LOGIC */


import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { OrderModel } from './../../models/orders';

@Component({
  selector: 'app-actual-orders',
  templateUrl: './actual-orders.component.html',
  styleUrls: ['./actual-orders.component.css']
})
export class ActualOrdersComponent implements OnInit {
  // ordersInQueue: OrderModel[];
  ordersInQueue: any[];
  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders = () =>
    this.ordersService
      .getOrdersInService()
      .subscribe(res => (this.ordersInQueue = res));


  markCompleted(data) {
    this.ordersService.updateOrder(data);
  }

  deleteOrder(data) {
    this.ordersService.deleteOrder(data);
  }


}