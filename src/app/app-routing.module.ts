import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customers',
    loadChildren: () => import('mfe1/CustomerModule').then(m => {
      return m.CustomersModule
    })
  },
  {
    path: 'payment',
    loadComponent: () => import('mfe1/PaymentComponent').then(m => m.PaymentComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
