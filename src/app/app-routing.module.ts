import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{ path:'', redirectTo: 'home', pathMatch:'full'},
{ path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) },
{ path: 'login', loadChildren: () => import('./components/pages/login/login.module').then(m => m.LoginModule) },
{ path: 'notifications', loadChildren: () => import('./components/pages/notifications/notifications.module').then(m => m.NotificationsModule) },
{ path: 'cart', loadChildren: () => import('./components/pages/cart/cart.module').then(m => m.CartModule) },
{ path: 'categories', loadChildren: () => import('./components/pages/categories.module').then(m => m.CategoriesModule) },
{ path: 'success', loadChildren: () => import('./components/success/success.module').then(m => m.SuccessModule) },
 { path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
