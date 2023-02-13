import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['diseños.css']
})
export class Tab3Page {
  constructor(private alertController: AlertController) {}

  async presentAlert() {//asincrono
    const alert = await this.alertController.create({
      header: 'ALERTA',
      subHeader: 'Alerta de IONIC',
      message: 'Ya mamo la APP',
      buttons: ['OK','Cancel'],
    });

    await alert.present();
  }
}
