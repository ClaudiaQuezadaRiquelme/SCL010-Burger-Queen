import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { AngularFirestoreCollection } from '@angular/fire/firestore';
import {OrderModel} from './../../models/orders';
import { ChronometerService } from 'src/app/services/chronometer.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-kitchen-orders',
  templateUrl: './kitchen-orders.component.html',
  styleUrls: ['./kitchen-orders.component.css']
})
export class KitchenOrdersComponent implements OnInit {
  // ordersBrought:AngularFirestoreCollection<OrderModel>;
  ordersBrought: any;
  orderIsChecked = false;

  constructor(
    private ordersService: OrdersService,
    private chronometerService: ChronometerService
    ) { }

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
    readyToDeliverClickable: data.status === 'toDeliver',
    deliverClickable: data.status === 'delivered'
    };
  return classes;
  }

  checkCheckbox($event, sendId: string) {
    if ($event.target.checked === true) {
      this.orderIsChecked = true;
      } else {
        this.orderIsChecked = false;
      }
  }

  SendToReadyOrders(order) {
    if (this.orderIsChecked === true) {
      this.ordersService.changeStatusToDeliver(order.payload.doc.id);
    }
  }

  timeInKitcken(order) {
    return this.chronometerService.startCounterTime((order.payload.doc.data().startTime.toDate()));
  }

  updateTimeInKitchen(order) {
    setTimeout( () => {
      document.querySelector('#time_' + order.payload.doc.id).innerHTML  = this.timeInKitcken(order);
    }, 5000);
  }

}
