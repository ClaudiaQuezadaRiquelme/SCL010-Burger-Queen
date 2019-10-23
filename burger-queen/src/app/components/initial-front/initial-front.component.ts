// <THIS COMPONENT MANAGES THE INITIAL APP FRONT VIEW LOGIC

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { OrderModel } from './../../models/orders';
import { AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';

@Component({
  selector: 'app-initial-front',
  templateUrl: './initial-front.component.html',
  styleUrls: ['./initial-front.component.css']
})
export class InitialFrontComponent implements OnInit, AfterViewInit {

  recentOrders: any;
  recentSinteticOrders = [];

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getRecentOrders();

  }

  ngAfterViewInit() {

  }

  getRecentOrders() {
    this.ordersService.getOrdersByCreationTime().snapshotChanges().subscribe(data => {
      for (let j = 0; j < data.length; j++) {
        if (j < 5) {
          this.recentSinteticOrders.push(data[j]);
        }
      }
      this.recentOrders = data;
      console.log('this recentOrders', this.recentOrders);
    });

  }




  setClass(id, data) {
    const classes = {
      stillCooking: data.status === 'enCocina',
      readyToDeliver: data.status === 'toDeliver',
      delivered: data.status === 'delivered'
    };
    return classes;
  }
}
