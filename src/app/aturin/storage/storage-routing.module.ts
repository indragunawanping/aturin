import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoragePage } from './storage.page';

const routes: Routes = [
  {
    path: '',
    component: StoragePage
  },
  {
    path: 'item-detail',
    loadChildren: () => import('./item-detail/item-detail.module').then( m => m.ItemDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoragePageRoutingModule {}
