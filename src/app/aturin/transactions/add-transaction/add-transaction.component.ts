import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.scss'],
})
export class AddTransactionComponent implements OnInit {
  private transactionForm: FormGroup;

  constructor(
    private modalCtrl: ModalController,
  ) {
  }

  ngOnInit() {
    this.transactionForm = new FormGroup({
      itemName: new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
      qty: new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
      price: new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }),
      date: new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
    });
  }

  handleCancelButtonClick() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
