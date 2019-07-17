import {Component} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';

@Component({
    selector: 'app-grocieries',
    templateUrl: 'grocerylist.page.html',
    styleUrls: ['grocerylist.page.scss']
})
export class GrocerylistPage {

    title = 'Grocery List';
    items = [
        {name: 'Milk', qty: 2},
        {name: 'Bread', qty: 1},
        {name: 'Eggs', qty: 3},
    ];

    constructor(private toastController: ToastController, public alertController: AlertController) {
    }


    addItem(itemName, quantity) {
        this.items.push({qty: quantity, name: itemName});
    }

    removeItem(item, index) {
        console.log('Removing ', item);
        this.items.splice(index, 1);
        this.presentToast('Removing item: ' + item.name + ' .... ');
    }

    async presentToast(msg) {
        const toast = await this.toastController.create({
            message: msg,
            duration: 2000,
            position: 'top'
        });
        toast.present();
    }

    async presentAddGroceryItemPrompt() {
        const alert = await this.alertController.create({
            header: 'Add Grocery Item!',
            inputs: [
                {
                    name: 'itemName',
                    type: 'text',
                    placeholder: 'Name'
                },
                {
                    name: 'quantity',
                    type: 'number',
                    placeholder: 'Quantity',
                    min: 0
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
                    text: 'Ok',
                    handler: (data) => {
                        console.log('Confirm Ok');
                        this.addItem(data.itemName, data.quantity);
                    }
                }
            ]
        });

        await alert.present();
    }

}
