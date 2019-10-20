import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../../services/orders.service';
import { OrderModel } from './../../models/orders';
import { Product } from './../../models/products';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


@Component({
  selector: 'app-single-order',
  templateUrl: './single-order.component.html',
  styleUrls: ['./single-order.component.css']
})
export class SingleOrderComponent implements OnInit {
  loadingStatus = false;
  singleOrder: any;
  productsToSelect: Product[];
  editing = false;
  editingForm = this.ordersService.form;
  newOrderItems: Product[] = [];
  breakfastBool = false;
  traditionalBool = false;
  showKindOfBurger = false;
  itemsOfOrder: Product[];
  items: Product[];
  product: Product;
  producToReplaceName: string;
  currentId: string;

  totalOrderCost: number;
  burgerItem: Product = {
    name: '',
    menu: '',
    price: 0,
    type: ''
  };

  constructor(public ordersService: OrdersService, private route: ActivatedRoute, private location: Location) {

  }

  ngOnInit() {
    this.bringTheInterestOrder();
    this.ordersService.getMenuItemsFromFS().subscribe(itemsComing => {
      this.items = itemsComing;
    });
  }

  changeKindOfBurger(kindOfBurger: string) {
    const burger: Product = {
      menu: this.burgerItem.menu,
      name: this.burgerItem.name,
      price: this.burgerItem.price,
      type: kindOfBurger
    };
    this.showKindOfBurger = false;
    this.burgerItem.type = kindOfBurger;
    this.addItem(burger);
    // si pongo this.addItem(this.burgerItem), cada vez que agregue una hamburguesa con un tipo distinto,
    // todas las hamburguesas cambiarán su tipo. Ejemplo: si elijo una beef y después una veg,
    // ambas hamburguesas serán veg. Si elijo una beef, una veg y una chicken, las 3 hamburguesas serán chicken
  }

  addItem = (item) => {

    if (item.name === 'Hamburguesa Simple' || item.name === 'Hamburguesa Doble') {
      if (item.type === 'Burger') {
        console.log('if primero');
        this.showKindOfBurger = true;
        // si pongo this.burgerItem = item, sólo podemos elegir una hamburguesa Simple y una Doble por pedido
        // y no nos permitirá elegir el tipo [veg,beef,chicken] nunca más.
        // Esto es porque el ngFor corre sólo una vez.
        this.burgerItem.menu = item.menu;
        this.burgerItem.name = item.name;
        this.burgerItem.price = item.price;
        this.burgerItem.type = item.type;
        console.log('this.burgerItem: ', this.burgerItem);

      } else if (this.burgerItem.type === 'chicken' || this.burgerItem.type === 'beef' || this.burgerItem.type === 'veg') {
        console.log('if segundo');

        this.itemsOfOrder.push(item);
        this.totalOrderCost += item.price;
        console.log(item.price);
        console.log(this.totalOrderCost);
      }
    } else {
      console.log('if por defecto');
      this.itemsOfOrder.push(item);
      this.totalOrderCost += item.price;
      console.log(item.price);
      console.log(this.totalOrderCost);
    }
  }


  bringTheInterestOrder = () => {
    this.currentId = this.route.snapshot.paramMap.get('id');
    const id = this.route.snapshot.paramMap.get('id');
    this.ordersService.bringOneOrderV2(id).snapshotChanges().subscribe(
      whatComes => {
        this.singleOrder = whatComes.payload.data();
        this.itemsOfOrder = this.singleOrder.itemsOfOrder;
        console.log('this is items of order', this.itemsOfOrder);
        this.loadingStatus = true;
        console.log('whatComes es esto: ', whatComes);
        console.log('this.singleOrder es esto: ', this.singleOrder);
      }
    );
  }



  enterOrderEdition = (productNameThatComes: string) => {
    this.editing = true;
    this.producToReplaceName = productNameThatComes;
    console.log('este es el nombre de producto que se trae:', this.producToReplaceName);
  }

  replaceItem(item) {
    const collectionOfProducts = this.singleOrder.itemsOfOrder;
    const prodName: any = this.producToReplaceName;
    for (const element of collectionOfProducts) {
      if (element.name === prodName) {
        const data = item;
        this.ordersService.updateOrder(this.currentId, data);
      }
    }
    console.log('this is the new itemsOfOrder', this.singleOrder.itemsOfOrder);
    console.log('this is item', item);
  }

  removeItem(item) {
    const collectionOfProducts = this.singleOrder.itemsOfOrder;
    let element: any;
    const prodName: any = this.producToReplaceName;
    for (element of collectionOfProducts) {
      if (element.name === prodName) {
        const data = item;
        this.ordersService.deleteItemInOrder(this.currentId, data);
      }
    }
  }

  bringOnlyBreakfast() {
    this.breakfastBool = true;
    this.traditionalBool = false;
    console.log('changing to bringOnlyBreakfast');
  }

  bringOnlyTraditional() {
    this.breakfastBool = false;
    this.traditionalBool = true;
    console.log('changing to bringOnlyTraditional');

  }

  onSubmit() {
    console.log('is submitting');
  }
}


