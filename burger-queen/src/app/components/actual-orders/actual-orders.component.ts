/* THIS COMPONENT MANAGES THE ORDER (ONE SINGLE ORDER) LOGIC */


import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { OrderModel } from './../../models/orders';
import { AngularFirestoreCollection } from '@angular/fire/firestore';

@Component({
  selector: 'app-actual-orders',
  templateUrl: './actual-orders.component.html',
  styleUrls: ['./actual-orders.component.css']
})
export class ActualOrdersComponent implements OnInit {
  ordersInQueue: any[];
  ordersInQueue2: AngularFirestoreCollection;


  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    // this.ordersInQueue = this.ordersService.getOrdersInService();
    this.getOrders();
    console.log(this.ordersInQueue2 = this.ordersService.getOrdersByCreationTime());
  }

  getOrders() {
    this.ordersService
      .getOrdersInService()
      .subscribe(res => (this.ordersInQueue = res));
    }

  deleteOrder(id) {
    this.ordersService.deleteOrder(id);
  }


  showOrderSingleView(data, idComing) {
    // call bringOneOrder
    this.ordersService.bringOneOrder(data, idComing);
    console.log('is calling showOrderSingleView, and its id', idComing );
  }



  setClass(id, data) {
    const classes = {
      stillCooking: data.status === 'enCocina',
      readyToDeliver: data.status === 'delivered'
    };
    return classes;
  }

}
