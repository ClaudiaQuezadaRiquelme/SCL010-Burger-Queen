import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
// neccessary import for using the arrayUnion method of firebase
import * as fb from 'firebase/app';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from './../models/products';
import { OrderModel } from './../models/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  // properties for getting products from firestore collection products
  orderArray: Array<Product>;
  item: Product;
  itemsCollection: AngularFirestoreCollection<Product>;
  items: Observable<Product[]>;
  itemDoc: AngularFirestoreDocument<Product>;

  singleOrder: OrderModel;

  orderCollection: AngularFirestoreCollection<Product[]>;
  orders: Observable<OrderModel[]>;
  orderDoc: AngularFirestoreDocument<OrderModel>;
  orderCost: number;
  initialTimeOrder = 0;
  testingTime = 0;

  breakfastCollection: Observable<Product[]>;

  // reactive form property
  form = new FormGroup({
    orderId: new FormControl(''),
    customerName: new FormControl(''),
    itemsOfOrder: new FormControl(''),
    status: new FormControl(''),
    cost: new FormControl(''),
    startTime : new FormControl('')
  });


  constructor(private firebase: AngularFirestore) {
    this.itemsCollection = this.firebase.collection<Product>('products', ref => ref.orderBy('name', 'asc'));
    this.items = this.firebase.collection<Product>('products').snapshotChanges().pipe(
      map(changes => changes.map(a => {
        const data = a.payload.doc.data() as Product;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }
  getProductList() {
    return this.firebase.collection('products').snapshotChanges();
  }

  saveProductsOrders(data: object, customerName: string) {
    console.log(data);
    return this.firebase.collection('orders').add({
      customerName: customerName,
      order: data
    })
      .then(docRef => {
        console.log('Document written with ID: ', docRef.id);
      })
      .catch(error => {
        console.error('Error adding document: ', error);
      });
  }

  // methods related to managing menu items from firestore
  getMenuItemsFromFS() {
    return this.items;
  }

  createOrder(datta) {
    return new Promise<any>((resolve, reject) => {
      this.firebase
        .collection('orders')
        .add(datta)
        .then(res => {
          { }
          console.log('esto es res de createOrder: ', res);
        },
          err => reject(err));
    });
  }

  // Brings all orders
  getOrdersInService() {
    return this.firebase.collection('orders').snapshotChanges();
  }

  getOrdersByCreationTime() {
    return this.firebase.collection('orders', ref => ref.orderBy('startTime', 'asc'));
  }

  // Brings orders different than delivered
  getOnlyDeliveredOrders() {
    console.log('este es el tipo de data que viene de las ordenes entregadas en el servicio: ');
    console.log(typeof (this.firebase.collection('orders', ref => ref.where('status', '==', 'delivered')).snapshotChanges()));
    return this.firebase.collection('orders', ref => ref.where('status', '==', 'delivered')).snapshotChanges();
  }


  // no funciona aún, sólo muestra por consola lo que trae, no sé cómo acceder a esos items aún
  filterBreakfastItems() {
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
  }

  filterTraditionalItems() {
    console.log('is reaching the service item filtering: traditional');

  }

  addItemToOrder(id, data) {
        return this.firebase.collection('orders').doc(id).update({
          itemsOfOrder: fb.firestore.FieldValue.arrayUnion(data)
        });
      }

  deleteItemInOrder(id, data, itemsContained, trashId, liId) {
    for (const item of itemsContained) {
      if (item.name === data && trashId === liId ) {
        return this.firebase.collection('orders').doc(id).update({
          itemsOfOrder: fb.firestore.FieldValue.arrayRemove(item)
        });
      }
    }
  }

  bringOneOrder(data, theId) {
    console.log('this is the data coming from the single doc en el servicio', data);
    console.log('this is the id coming from the single doc en el servicio', theId);
    this.singleOrder = data;
    console.log('single order: ', this.singleOrder);

    // return this.firebase.collection('orders').doc(data.payload.doc.theId);
  }

  bringOneOrderV2(id) {
    console.log('llega hasta bringOneOrderV2');
    return this.firebase.collection('orders').doc(id);
  }


  bringKitchenOrders() { // obtiene órdenes en cocina y las ordena
    return this.firebase.collection('orders', ref => ref.where('status', '==', 'enCocina').orderBy('startTime', 'asc')).snapshotChanges();
  }

  deleteOrder(id) {
    return this.firebase.collection('orders').doc(id).delete();

  }

  setOrderInitialTime() {
    return this.initialTimeOrder = new Date().getTime();
  }

  getDeliveredOrderTime() {
    return this.testingTime = new Date().getTime();

  }

  getOrderTimeElapsed() {
    return (this.initialTimeOrder - this.testingTime) / 60000;
  }

}
