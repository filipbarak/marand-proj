"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var moment = require('moment');
var UserDetailsFormComponent = (function () {
    function UserDetailsFormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    UserDetailsFormComponent.prototype.ngOnInit = function () {
        this.user = this.formBuilder.group({
            fullName: ['', forms_1.Validators.required],
            dateOfBirth: ['', forms_1.Validators.required],
            EMSO: ['', forms_1.Validators.required],
            KZZ: ['', forms_1.Validators.required],
            adress: ['', forms_1.Validators.required]
        });
    };
    UserDetailsFormComponent.prototype.checkDate = function () {
        this.date = moment(this.user.controls['dateOfBirth'].value, 'DD.MM.YYYY', true).isValid();
        return this.date;
    };
    ;
    UserDetailsFormComponent.prototype.onSubmit = function () {
        console.log(this.user.value, this.user.valid);
    };
    UserDetailsFormComponent = __decorate([
        core_1.Component({
            selector: 'app-user-details-form',
            templateUrl: './user-details-form.component.html',
            styleUrls: ['./user-details-form.component.css']
        })
    ], UserDetailsFormComponent);
    return UserDetailsFormComponent;
}());
exports.UserDetailsFormComponent = UserDetailsFormComponent;
//# sourceMappingURL=user-details-form.component.js.map