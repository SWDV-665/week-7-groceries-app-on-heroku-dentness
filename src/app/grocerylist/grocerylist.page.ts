import {Component, ViewChild} from '@angular/core';
import {AlertController, IonList, ToastController} from '@ionic/angular';
import {GroceriesService} from '../../services/groceries.service';
import {InputDialogService} from '../../services/input-dialog.service';

@Component({
    selector: 'app-grocieries',
    templateUrl: 'grocerylist.page.html',
    styleUrls: ['grocerylist.page.scss']
})
export class GrocerylistPage {

    title = 'Grocery List';

    constructor(private toastController: ToastController,
                public groceriesService: GroceriesService, public inputDialogServices: InputDialogService) {
    }

    /* UI Operations */
    loadItems() {
        return this.groceriesService.getItems();
    }

    addItem() {
        console.log('Adding new item');
        this.inputDialogServices.presentGroceryItemPrompt();
    }

    editItem(item, index) {
        console.log('Editing ', item);
        this.inputDialogServices.presentGroceryItemPrompt(item, index);

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
}
