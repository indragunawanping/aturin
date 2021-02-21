import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddTransactionComponent } from '../transactions/add-transaction/add-transaction.component';
import { ModalController } from '@ionic/angular';
import { AddItemComponent } from './add-item/add-item.component';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.page.html',
  styleUrls: ['./storage.page.scss'],
})
export class StoragePage implements OnInit {

  constructor(
    private router: Router,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  handleAddItemButtonClick() {
    this.modalCtrl
      .create({
        component: AddItemComponent
      })
      .then(
        modalEl => {
          modalEl.present();
          return modalEl.onDidDismiss();
        }
      );
  }

  handleItemClick() {
    this.router.navigateByUrl('/storage-detail');
  }
}
