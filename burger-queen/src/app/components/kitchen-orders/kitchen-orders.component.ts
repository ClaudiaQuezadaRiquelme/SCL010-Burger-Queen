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
  ordersBrought:any;

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.bringOrdersInKitchen();
  }

bringOrdersInKitchen(){
  this.ordersService.bringKitchenOrders().subscribe(receivedOrders =>{
    this.ordersBrought = receivedOrders;
  })
  console.log('Trayendo órdenes en cocina desde el componente');
}

}