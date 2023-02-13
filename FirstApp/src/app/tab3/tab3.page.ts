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
      message: 'Ya valio la APP',
      buttons: ['OK','Cancel'],
    });

    await alert.present();
  }
  
  async presenAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (maximo 8 caracteres)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'edad',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }
}
