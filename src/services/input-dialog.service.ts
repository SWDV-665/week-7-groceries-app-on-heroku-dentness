import {Injectable, ViewChild} from '@angular/core';
import {AlertController, IonList} from '@ionic/angular';
import {GroceriesService} from './groceries.service';

@Injectable({
    providedIn: 'root'
})
export class InputDialogService {

    constructor(public alertController: AlertController,
                public groceriesService: GroceriesService) {
    }

    async presentGroceryItemPrompt(item?, index?) {
        const alert = await this.alertController.create({
            header: item ? 'Edit Grocery Item' : 'Add Grocery Item',
            inputs: [
                {
                    name: 'itemName',
                    type: 'text',
                    placeholder: 'Name',
                    value: item ? item.name : null
                },
                {
                    name: 'quantity',
                    type: 'number',
                    placeholder: 'Quantity',
                    min: 0,
                    value: item ? item.qty : null
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                        console.log('Confirm Cancel');
                    }
                }, {
                    text: 'Save',
                    handler: (data) => {
                        console.log('Confirm Ok');
                        if (index !== undefined) {
                            this.groceriesService.updateItem(index, {name: data.itemName, qty: data.quantity});
                        } else {
                            this.groceriesService.addItem(data.itemName, data.quantity);
                        }
                    }
                }
            ]
        });

        await alert.present();
    }

}
