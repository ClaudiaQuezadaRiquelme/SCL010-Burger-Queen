import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {OrderModel} from './../../models/orders';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.css']
})
export class KitchenOrdersComponent implements OnInit {
  // ordersBrought:AngularFirestoreCollection<OrderModel>;
  ordersBrought: any;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.bringOrdersInKitchen();
    console.log('this is received orders: ', this.ordersBrought);
  }

bringOrdersInKitchen() {
  this.ordersService.bringKitchenOrders().subscribe(receivedOrders => {
    this.ordersBrought = receivedOrders;
  });
  console.log('Trayendo órdenes en cocina desde el componente');
}

setClass(id, data) {
  const classes = {
    stillCookingClickable: data.status === 'enCocina',
    readyToDeliverClickable: data.status === 'delivered',
    deliverClickable: data.status === 'done'
  };
  return classes;
}

}
