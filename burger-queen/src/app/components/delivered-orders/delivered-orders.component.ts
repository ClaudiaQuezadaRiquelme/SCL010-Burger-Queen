import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-delivered-orders',
  templateUrl: './delivered-orders.component.html',
  styleUrls: ['./delivered-orders.component.css']
})
export class DeliveredOrdersComponent implements OnInit {
  deliveredOrders:any;

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
    this.getDeliveredOrders();
  }

  getDeliveredOrders = () =>{
    this.ordersService.getOnlyDeliveredOrders().subscribe(whatBrings=>{
       this.deliveredOrders = whatBrings;
       });
     console.log("Estas son deliveredOrders", this.deliveredOrders);
   }

}
