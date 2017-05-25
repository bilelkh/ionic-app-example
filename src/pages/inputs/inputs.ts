import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ActionSheetController } from 'ionic-angular';

import { InputsFixedInlineLabelsPage } from '../inputs-fixed-inline-labels/inputs-fixed-inline-labels';
import { InputsFloatingLabelsPage } from '../inputs-floating-labels/inputs-floating-labels';

@Component({
  selector: 'page-inputs',
  templateUrl: 'inputs.html'
})
export class InputsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public actionSheetCtrl: ActionSheetController) {}

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Cards',
      buttons: [
        {
          text: 'Fixed Inline Labels',
          role: 'destructive',
          handler: () => {
            this.openPage(InputsFixedInlineLabelsPage)
          }
        },
        {
          text: 'Floating Labels',
          role: 'destructive',
          handler: () => {
            this.openPage(InputsFloatingLabelsPage)
          }
        },
      ]
    });
    actionSheet.present();
  }

  openPage(page: any) {
    this.navCtrl.push(page);
  }
}
