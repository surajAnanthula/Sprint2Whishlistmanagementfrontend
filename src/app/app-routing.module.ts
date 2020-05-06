import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductslistComponent } from './productslist/productslist.component';
import { ViewwhishlistComponent } from './viewwhishlist/viewwhishlist.component';


const routes: Routes = [
  {path:'viewproductslist',component:ProductslistComponent},
  {path:'viewwhishlist',component:ViewwhishlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
