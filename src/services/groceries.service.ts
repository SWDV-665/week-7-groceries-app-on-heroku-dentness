import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GroceriesService {


    items = [];

    constructor() {
    }

    getItems() {
        return this.items;
    }

    remoteItem(index) {
        this.items.splice(index, 1);
    }

    updateItem(index, newItem) {
        this.items[index] = newItem;
    }

    addItem(itemName, quantity) {
        this.items.push({qty: quantity, name: itemName});
    }
}
