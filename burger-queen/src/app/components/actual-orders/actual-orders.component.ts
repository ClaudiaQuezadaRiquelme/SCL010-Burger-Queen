 /* THIS COMPONENT MANAGES THE ORDER (ONE SINGLE ORDER) LOGIC */


import { Component, OnInit } from '@angular/core';
import {OrdersService} from './../../services/orders.service';

@Component({
  selector: 'app-actual-orders',
  templateUrl: './actual-orders.component.html',
  styleUrls: ['./actual-orders.component.css']
})
export class ActualOrdersComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  }

}
