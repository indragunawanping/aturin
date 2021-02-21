import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController, ToastController } from '@ionic/angular';
import { finalize } from 'rxjs/operators';
import { AddItemService } from './add-item.service';
import { CommonService } from '../../../shared/common.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss'],
})
export class AddItemComponent implements OnInit {
  private itemForm: FormGroup;
  private isLoading = false;

  constructor(
    private modalCtrl: ModalController,
    private addItemService: AddItemService,
    private commonService: CommonService
  ) {
  }

  ngOnInit() {
    this.itemForm = new FormGroup({
      itemName: new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }),
      qty: new FormControl(null,
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.min(1)]
        }),
      weight: new FormControl(null,
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

  handleAddButtonClick() {
    this.isLoading = true;
    const formData = this.itemForm.value;

    this.addItemService.submitItemData(formData)
      .pipe(finalize(() => {
        this.isLoading = false;
      }))
      .subscribe((data: any) => {
        console.log('data: ', data);
      }, (err) => {
        this.isLoading = false;
        let message = '';
        if (err.error.message === undefined) {
          message = 'Network problem. Please try again.';
        } else {
          message = err.error.message;
        }
        this.commonService.presentToast(message);
      });
  }

  handleCancelButtonClick() {
    this.modalCtrl.dismiss(null, 'cancel');
  }


}
