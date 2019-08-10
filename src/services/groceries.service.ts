import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GroceriesService {


    dataChanged$: Observable<boolean>;
    private dataChangeSubject: Subject<boolean>;

    baseUrl = 'http://localhost:8080/api';

    constructor(public http: HttpClient) {
        this.dataChangeSubject = new Subject<boolean>();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }

    getItems(): Observable<object[]> {
        return this.http.get<object[]>(this.baseUrl + '/groceries').pipe(
            catchError(this.handleError)
        );
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

    removeItem(item) {
        this.http.delete(this.baseUrl + '/groceries/' + item._id).subscribe(res => {
            this.dataChangeSubject.next(true);
        });

    }

    updateItem(id, newItem) {
        this.http.put(this.baseUrl + '/groceries/' + id, {name: newItem.name, qty: newItem.qty}).subscribe(res => {
            this.dataChangeSubject.next(true);
        });
    }

    addItem(itemName, quantity) {

        this.http.post(this.baseUrl + '/groceries', {name: itemName, qty: quantity}).subscribe(res => {
            this.dataChangeSubject.next(true);
        });
    }
}
