import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { ViewComponent } from './view/view.component';
import { authguardGuard } from './authguard.guard';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path : '',redirectTo:'home',pathMatch:'full'},
  { path: 'login', component: LoginComponent },  
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomepageComponent},
  { path: 'cart', component: CartComponent,canActivate:[authguardGuard] },
  { path: 'products/:category', component: ProductsComponent },
  { path: 'details/:prodName', component: ProductDetailsComponent},
  {path:'view',component:ViewComponent},
  { path: 'cart/:obj', component: CartComponent },
  {path:'view/:emailId',component:ViewComponent},
  { path: '**', component: NotFoundComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
