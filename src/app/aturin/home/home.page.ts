import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CreateOrderComponent } from './create-order/create-order.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private modalCtrl: ModalController
  ) {
  }

  handleAddFabButtonClick() {
    console.log('clicked');

    this.modalCtrl
      .create({
        component: CreateOrderComponent
      })
      .then(
        modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        }
      );
  }
}
