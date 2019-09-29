import { Component, OnInit, Input } from '@angular/core';
import { InputOrderService } from './../../services/input-order.service';
import { Client } from './../../models/client';
// import {Product} from './../../models/products';

@Component({
  selector: 'app-input-order',
  templateUrl: './input-order.component.html',
  styleUrls: ['./input-order.component.css']
})
export class InputOrderComponent implements OnInit {
  client:Client;
  // productList:Product[];

  @Input()
  clientNameVar:string;

  constructor(public inputOrderService:InputOrderService) { }

  ngOnInit() {
  }

  getFromInput() {
    // this.client.name = clientNameInHTML;
    this.inputOrderService.saveClientName(this.clientNameVar);
    // this.productList = 
  }

  //TODO crear función que envíe el nombre del cliente al componente product-list
  

}
