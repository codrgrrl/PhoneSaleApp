import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//import { ProductListComponent } from 'scr/app/product-list/product-list/product-list.component';
import { ProductListComponent } from 'src/app/product-list/product-list/product-list.component';

const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "product-list"},
   {path:"product-list", component: ProductListComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
