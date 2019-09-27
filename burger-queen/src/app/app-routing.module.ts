import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InputOrderComponent} from './components/input-order/input-order.component';
import {InitialFrontComponent} from './components/initial-front/initial-front.component';
import {MenuBoardComponent} from './components/menu-board/menu-board.component';
import {ActualOrdersComponent} from './components/actual-orders/actual-orders.component';
import {ProductListComponent} from './components/product-list/product-list.component';



const routes: Routes = [
  {path: "", component: InitialFrontComponent},
  {path: "ingresar", component: InputOrderComponent},
  {path: "orders", component: ActualOrdersComponent},
  {path: "menuboard", component: MenuBoardComponent},
  {path: "productList", component: ProductListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
