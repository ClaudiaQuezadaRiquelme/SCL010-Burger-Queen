import {Product} from './products';

export interface OrderModel{
    orderId:string;
    customerName:string;
    itemsOfOrder:Product[];
    status:string;
    completed:boolean;
}

