(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["grocerylist-grocerylist-module"],{

/***/ "./src/app/grocerylist/grocerylist.module.ts":
/*!***************************************************!*\
  !*** ./src/app/grocerylist/grocerylist.module.ts ***!
  \***************************************************/
/*! exports provided: GrocerylistModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrocerylistModule", function() { return GrocerylistModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _grocerylist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grocerylist.page */ "./src/app/grocerylist/grocerylist.page.ts");







var GrocerylistModule = /** @class */ (function () {
    function GrocerylistModule() {
    }
    GrocerylistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _grocerylist_page__WEBPACK_IMPORTED_MODULE_6__["GrocerylistPage"] }])
            ],
            declarations: [_grocerylist_page__WEBPACK_IMPORTED_MODULE_6__["GrocerylistPage"]]
        })
    ], GrocerylistModule);
    return GrocerylistModule;
}());



/***/ }),

/***/ "./src/app/grocerylist/grocerylist.page.html":
/*!***************************************************!*\
  !*** ./src/app/grocerylist/grocerylist.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            {{title}}\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-fab (click)=\"addItem()\" vertical=\"top\" horizontal=\"end\" edge=\"true\" slot=\"fixed\">\n        <ion-fab-button>\n            <ion-icon name=\"add\"></ion-icon>\n        </ion-fab-button>\n    </ion-fab>\n\n    <h3 text-center *ngIf=\"items.length === 0\">No items in your list.</h3>\n\n    <ion-list>\n        <ion-item-sliding *ngFor=\"let item of items; let i = index\">\n            <ion-item>\n                <div>\n                    <h2>{{item.name}}</h2>\n                    <p>Qty: {{item.qty}}</p>\n                </div>\n            </ion-item>\n            <ion-item-options side=\"end\">\n                <ion-item-option (click)=\"editItem(item, i)\" color=\"primary\">\n                    <ion-icon slot=\"icon-only\" name=\"create\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option (click)=\"shareItem(item)\" color=\"light\">\n                    <ion-icon slot=\"icon-only\" name=\"share\"></ion-icon>\n                </ion-item-option>\n                <ion-item-option (click)=\"removeItem(item, i)\" color=\"danger\">\n                    <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n                </ion-item-option>\n            </ion-item-options>\n        </ion-item-sliding>\n\n\n    </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/grocerylist/grocerylist.page.scss":
/*!***************************************************!*\
  !*** ./src/app/grocerylist/grocerylist.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dyb2NlcnlsaXN0L2dyb2NlcnlsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/grocerylist/grocerylist.page.ts":
/*!*************************************************!*\
  !*** ./src/app/grocerylist/grocerylist.page.ts ***!
  \*************************************************/
/*! exports provided: GrocerylistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GrocerylistPage", function() { return GrocerylistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_groceries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/groceries.service */ "./src/services/groceries.service.ts");
/* harmony import */ var _services_input_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/input-dialog.service */ "./src/services/input-dialog.service.ts");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/ngx/index.js");






var GrocerylistPage = /** @class */ (function () {
    function GrocerylistPage(navCtrl, toastController, groceriesService, inputDialogServices, socialSharing) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastController = toastController;
        this.groceriesService = groceriesService;
        this.inputDialogServices = inputDialogServices;
        this.socialSharing = socialSharing;
        this.title = 'Grocery Listz';
        this.items = [];
        groceriesService.dataChanged$.subscribe(function (dataChanged) {
            _this.loadItems();
        });
        this.loadItems();
    }
    // TODO: Determine how this code is called.  Not being triggered.
    GrocerylistPage.prototype.ionViewDidLoad = function () {
        this.loadItems();
    };
    /* UI Operations */
    GrocerylistPage.prototype.loadItems = function () {
        var _this = this;
        this.groceriesService.getItems().subscribe(function (items) { return _this.items = items; }, function (error) { return _this.errorMessage = error; });
        return this.items;
    };
    GrocerylistPage.prototype.addItem = function () {
        console.log('Adding new item');
        this.inputDialogServices.presentGroceryItemPrompt();
    };
    GrocerylistPage.prototype.editItem = function (item, index) {
        console.log('Editing ', item);
        this.inputDialogServices.presentGroceryItemPrompt(item, index);
    };
    GrocerylistPage.prototype.shareItem = function (item) {
        var _this = this;
        console.log('Sharing ', item);
        var msg = 'Grocery Item - Name: ' + item.name + ' - Quantity: ' + item.qty;
        var subject = 'Shared via Grocery App';
        this.socialSharing.share(msg, subject).then(function () {
            _this.presentToast('Shared sucessfully!');
        }).catch(function () {
            _this.presentToast('Error while sharing ' + item.name);
        });
    };
    GrocerylistPage.prototype.removeItem = function (item, index) {
        console.log('Removing ', item);
        this.presentToast('Removing item: ' + item.name + ' .... ');
        this.groceriesService.removeItem(item);
    };
    GrocerylistPage.prototype.presentToast = function (msg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: msg,
                            duration: 2000,
                            position: 'top'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    GrocerylistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grocieries',
            template: __webpack_require__(/*! ./grocerylist.page.html */ "./src/app/grocerylist/grocerylist.page.html"),
            styles: [__webpack_require__(/*! ./grocerylist.page.scss */ "./src/app/grocerylist/grocerylist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _services_groceries_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesService"],
            _services_input_dialog_service__WEBPACK_IMPORTED_MODULE_4__["InputDialogService"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_5__["SocialSharing"]])
    ], GrocerylistPage);
    return GrocerylistPage;
}());



/***/ }),

/***/ "./src/services/groceries.service.ts":
/*!*******************************************!*\
  !*** ./src/services/groceries.service.ts ***!
  \*******************************************/
/*! exports provided: GroceriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroceriesService", function() { return GroceriesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var GroceriesService = /** @class */ (function () {
    function GroceriesService(http) {
        this.http = http;
        // baseUrl = 'http://localhost:8080/api';
        this.baseUrl = 'https://grocery-server-dent.herokuapp.com/api';
        this.dataChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.dataChanged$ = this.dataChangeSubject.asObservable();
    }
    GroceriesService.prototype.getItems = function () {
        return this.http.get(this.baseUrl + '/groceries').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    };
    GroceriesService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var err = error || '';
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"].throw(errMsg);
    };
    GroceriesService.prototype.removeItem = function (item) {
        var _this = this;
        this.http.delete(this.baseUrl + '/groceries/' + item._id).subscribe(function (res) {
            _this.dataChangeSubject.next(true);
        });
    };
    GroceriesService.prototype.updateItem = function (id, newItem) {
        var _this = this;
        this.http.put(this.baseUrl + '/groceries/' + id, { name: newItem.name, qty: newItem.qty }).subscribe(function (res) {
            _this.dataChangeSubject.next(true);
        });
    };
    GroceriesService.prototype.addItem = function (itemName, quantity) {
        var _this = this;
        this.http.post(this.baseUrl + '/groceries', { name: itemName, qty: quantity }).subscribe(function (res) {
            _this.dataChangeSubject.next(true);
        });
    };
    GroceriesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroceriesService);
    return GroceriesService;
}());



/***/ }),

/***/ "./src/services/input-dialog.service.ts":
/*!**********************************************!*\
  !*** ./src/services/input-dialog.service.ts ***!
  \**********************************************/
/*! exports provided: InputDialogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDialogService", function() { return InputDialogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _groceries_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./groceries.service */ "./src/services/groceries.service.ts");




var InputDialogService = /** @class */ (function () {
    function InputDialogService(alertController, groceriesService) {
        this.alertController = alertController;
        this.groceriesService = groceriesService;
    }
    InputDialogService.prototype.presentGroceryItemPrompt = function (item, index) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Save',
                                    handler: function (data) {
                                        console.log('Confirm Ok');
                                        if (index !== undefined) {
                                            _this.groceriesService.updateItem(item._id, { name: data.itemName, qty: data.quantity });
                                        }
                                        else {
                                            _this.groceriesService.addItem(data.itemName, data.quantity);
                                        }
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    InputDialogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _groceries_service__WEBPACK_IMPORTED_MODULE_3__["GroceriesService"]])
    ], InputDialogService);
    return InputDialogService;
}());



/***/ })

}]);
//# sourceMappingURL=grocerylist-grocerylist-module.js.map