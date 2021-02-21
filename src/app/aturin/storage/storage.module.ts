import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoragePageRoutingModule } from './storage-routing.module';

import { StoragePage } from './storage.page';
import { AddItemComponent } from './add-item/add-item.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoragePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [StoragePage, AddItemComponent],
  entryComponents: [AddItemComponent]
})
export class StoragePageModule {}
