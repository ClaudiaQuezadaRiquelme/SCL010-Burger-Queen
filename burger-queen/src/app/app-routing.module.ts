import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InitialFrontComponent} from './components/initial-front/initial-front.component';
import {MenuBoardComponent} from './components/menu-board/menu-board.component';
import {ActualOrdersComponent} from './components/actual-orders/actual-orders.component';
import {ProductListComponent} from './components/product-list/product-list.component';
import {KitchenOrdersComponent} from './components/kitchen-orders/kitchen-orders.component';



const routes: Routes = [
  {path: "", component: InitialFrontComponent},
  {path: "orders", component: ActualOrdersComponent},
  {path: "menuboard", component: MenuBoardComponent},
  {path: "productList", component: ProductListComponent},
  {path: "kitchen", component: KitchenOrdersComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
