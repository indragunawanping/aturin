import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
})
export class CreateOrderComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}

  handleCancelButtonClick() {
    this.modalCtrl.dismiss(null, 'cancel');
  }

}
