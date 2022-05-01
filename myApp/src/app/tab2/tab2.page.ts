import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

export class Tab2Page {
  constructor(public alertController: AlertController) {}

  async presentAlertManufacturerMustang() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information Alert',
      subHeader: '',
      message: 'The manufacturer of the mustang is Ford Motor Company.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertAvgCostMustang() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information Alert',
      subHeader: '',
      message: 'The average cost for the 1969 Ford Mustang is $127k.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertEngineSizeMustang() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information Alert',
      subHeader: '',
      message: 'The engine size of the 1969 Mustang ranges from 5.0L to 5.7L V8.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  // Porsche 911 functions
  async presentAlertEngineSizePorsche911() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information Alert',
      subHeader: '',
      message: 'The engine size of the 1969 Porsche 911 is 5.7L V8.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertAvgCostPorsche911() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information Alert',
      subHeader: '',
      message: 'The average cost for the Porsche 911 is $141k.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertManufacturerPorsche911() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Information Alert',
      subHeader: '',
      message: 'The manufacturer of the mustang is Ford Motor Company.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
}
