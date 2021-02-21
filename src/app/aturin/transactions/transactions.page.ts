import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
  }

  handleAddTransactionButtonClick() {
    this.modalCtrl
      .create({
        component: AddTransactionComponent
      })
      .then(
        modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        }
      );
  }

}
