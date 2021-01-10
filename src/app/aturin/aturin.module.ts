import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AturinPageRoutingModule } from './aturin-routing.module';

import { AturinPage } from './aturin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AturinPageRoutingModule
  ],
  declarations: [AturinPage]
})
export class AturinPageModule {}
