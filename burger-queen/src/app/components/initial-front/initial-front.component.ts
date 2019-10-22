// <THIS COMPONENT MANAGES THE INITIAL APP FRONT VIEW LOGIC

import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { OrderModel } from './../../models/orders';
import { AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-initial-front',
  templateUrl: './initial-front.component.html',
  styleUrls: ['./initial-front.component.css']
})
export class InitialFrontComponent implements OnInit {

  recentOrders: any;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getRecentOrders();

  }

  getRecentOrders() {
    this.ordersService.getOrdersByCreationTime().snapshotChanges().subscribe(data => {
      this.recentOrders = data;
      console.log('this recentOrders', this.recentOrders);
    });
    }

    setClass(id, data) {
      const classes = {
        stillCooking: data.status === 'enCocina',
        readyToDeliver: data.status === 'delivered'
      };
      return classes;
    }
}
