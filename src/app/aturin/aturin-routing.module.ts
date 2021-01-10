import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AturinPage } from './aturin.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: AturinPage,
    children: [
      {
        path: 'home', children: [
          {
            path: '',
            loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
          }
        ]
      },
      {
        path: 'transactions', children: [
          {
            path: '',
            loadChildren: () => import('./transactions/transactions.module').then(m => m.TransactionsPageModule)
          }
        ]
      },
      {
        path: 'storage', children: [
          {
            path: '',
            loadChildren: () => import('./storage/storage.module').then(m => m.StoragePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/aturin/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/aturin/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'transactions',
    loadChildren: () => import('./transactions/transactions.module').then( m => m.TransactionsPageModule)
  },
  {
    path: 'storage',
    loadChildren: () => import('./storage/storage.module').then( m => m.StoragePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AturinPageRoutingModule {
}
