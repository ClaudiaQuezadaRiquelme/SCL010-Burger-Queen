import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { FormControl, FormGroup } from "@angular/forms";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './../models/products';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  //properties for getting products from firestore collection products
  orderArray: Array<Product>;
  item: Product;
  itemsCollection: AngularFirestoreCollection<Product>;
  orderCollection: AngularFirestoreCollection<Product[]>;
  items: Observable<Product[]>;
  itemDoc: AngularFirestoreDocument<Product>;
  breakfastCollection:Observable<Product[]>;

  //reactive form property
  form = new FormGroup({
    customerName: new FormControl(''),
    orderId: new FormControl(''),
    order: new FormControl(''),
    status: new FormControl('')
  })

  
  constructor(private firebase: AngularFirestore) { 
    this.itemsCollection = this.firebase.collection<Product>('products', ref=>ref.orderBy('name', 'asc'));
    this.items = this.firebase.collection<Product>('products').snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  

  getProductList() {
    return this.firebase.collection("products").snapshotChanges();
  }

  saveProductsOrders(data: object, customerName: string) {
    console.log(data);
    return this.firebase.collection("orders").add({
      customerName: customerName,
      order: data
    })
      .then(function (docRef) {
        console.log("Document written with ID: ", docRef.id);
        //te recomiendo guardar el id en caso de que hayan clientes con el mismo nombre => no lo pude guardar
      })
      .catch(function (error) {
        console.error("Error adding document: ", error);
      });
  }

  //methods related to managing menu items from firestore
  getMenuItemsFromFS(){
   return this.items;
  }

  createOrder(datta) {
    return new Promise<any>((resolve, reject) =>{
        this.firebase
            .collection("orders")
            .add(datta)
            .then(res => {
              {};
            console.log("esto es res de createOrder: ",res);
          }, 
          err => reject(err));
    });
}
//no funciona aún, sólo muestra por consola lo que trae, no sé cómo acceder a esos items aún
filterBreakfastItems(){
  console.log('is reaching the service item filtering: breakfast');
  this.breakfastCollection = this.firebase.collection('products', 
  ref => ref.where('menu', '==', 'Breakfast'))
 .snapshotChanges().pipe(
    map(changes => changes.map(a => {
      const data = a.payload.doc.data() as Product;
      const id = a.payload.doc.id;
      return { id, ...data };
    }))
  );
  console.log(this.breakfastCollection);
}

filterTraditionalItems(){
  console.log('is reaching the service item filtering: traditional');

}

}
