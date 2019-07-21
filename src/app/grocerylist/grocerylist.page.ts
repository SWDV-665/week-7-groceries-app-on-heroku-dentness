import {Component, ViewChild} from '@angular/core';
import {AlertController, IonList, ToastController} from '@ionic/angular';
import {GroceriesService} from '../../services/groceries.service';

@Component({
    selector: 'app-grocieries',
    templateUrl: 'grocerylist.page.html',
    styleUrls: ['grocerylist.page.scss']
})
export class GrocerylistPage {

    @ViewChild('lista') lista: IonList;
    title = 'Grocery List';

    constructor(private toastController: ToastController, public alertController: AlertController,
                public groceriesService: GroceriesService) {
    }

/*  CRUD OPERATIONS */

    loadItems() {
        return this.groceriesService.getItems();
    }

    addItem(itemName, quantity) {
        console.log('Adding ', itemName);
        this.groceriesService.addItem(itemName, quantity);
    }

    updateItem(index, itemName, quantity) {
        console.log('Updating ', itemName);
        this.groceriesService.updateItem(index, {name: itemName, qty: quantity});
    }

    removeItem(item, index) {
        console.log('Removing ', item);
        this.presentToast('Removing item: ' + item.name + ' .... ');
        this.groceriesService.remoteItem(index);
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
                    text: 'Add',
                    handler: (data) => {
                        console.log('Confirm Ok');
                        this.addItem(data.itemName, data.quantity);
                    }
                }
            ]
        });

        await alert.present().then(() => this.lista.closeSlidingItems());
    }

    async presentEditGroceryItemPrompt(item, index) {
        const alert = await this.alertController.create({
            header: 'Edit Grocery Item!',
            inputs: [
                {
                    name: 'itemName',
                    type: 'text',
                    placeholder: 'Name',
                    value: item.name
                },
                {
                    name: 'quantity',
                    type: 'number',
                    placeholder: 'Quantity',
                    min: 0,
                    value: item.qty
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
                        this.updateItem(index, data.itemName, data.quantity);
                    }
                }
            ]
        });

        await alert.present();
    }

}
