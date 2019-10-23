import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';

@Component({
  selector: 'app-ready-to-deliver',
  templateUrl: './ready-to-deliver.component.html',
  styleUrls: ['./ready-to-deliver.component.css']
})
export class ReadyToDeliverComponent implements OnInit {
readyToDeliver: any;

  constructor(private ordersService: OrdersService) { }

  ngOnInit() {
    this.getReadyToDeliver();
  }

  getReadyToDeliver() {
    this.ordersService.bringReadyToDeliverOrders().subscribe(receivedOrders => {
      this.readyToDeliver = receivedOrders;
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
