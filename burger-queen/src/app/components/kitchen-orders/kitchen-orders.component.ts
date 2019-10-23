import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {OrderModel} from './../../models/orders';
import { Logs } from 'selenium-webdriver';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.css']
})
export class KitchenOrdersComponent implements OnInit {
  // ordersBrought:AngularFirestoreCollection<OrderModel>;
  ordersBrought: any;
  orderIsChecked: boolean = false;

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

checkCheckbox($event, sendId: string) {
  if ($event.target.checked === true) {
    console.log("HOLI");
    console.log('sendId: ', sendId);
    this.orderIsChecked = true;
    
    } else {
      this.orderIsChecked = false;
      console.log("CHAI");
    }
}

SendToReadyOrders(order) {
  if (this.orderIsChecked === true) {
    console.log('ANVORGEZA');
    // order.payload.doc.data().status = 'toDeliver'; // NO FUNCIONA
    // console.log('order.payload.doc.data().status : ', order.payload.doc.data().status);
  }
}

}
