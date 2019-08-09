import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GroceriesService {


    dataChanged$: Observable<boolean>;
    private dataChangedSubject: Subject<boolean>;

    baseUrl = 'http://localhost:8080/api';
    items: any = [];

    constructor(public http: HttpClient) {
        this.dataChangedSubject = new Subject<boolean>();
        this.dataChanged$ = this.dataChangedSubject.asObservable();
    }

    getItems(): Observable<object[]> {
        return this.http.get<object[]>(this.baseUrl + '/groceries').pipe(
            map(this.extractData),
            catchError(this.handleError)
        );
    }

    private extractData(res: Response) {
        let body = res;
        return body || {};
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Observable.throw(errMsg);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    updateItem(index, newItem) {
        this.items[index] = newItem;
    }

    addItem(itemName, quantity) {
        this.items.push({qty: quantity, name: itemName});
    }
}
