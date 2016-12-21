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
        this.validators = this.checkDate;
    }
    UserDetailsFormComponent.prototype.ngOnInit = function () {
        this.user = this.formBuilder.group({
            fullName: ['', forms_1.Validators.required],
            dateOfBirth: ['', this.validators],
            EMSO: ['', this.checkEMSO],
            KZZ: [''],
            adress: ['']
        });
    };
    UserDetailsFormComponent.prototype.checkDate = function (date) {
        if (!date.value)
            return null;
        return moment(date.value, 'DD.MM.YYYY', true).isValid() ? null : {
            dateValid: {
                valid: false
            }
        };
    };
    ;
    UserDetailsFormComponent.prototype.onSubmit = function () {
        console.log(this.user.value, this.user.valid);
    };
    UserDetailsFormComponent.prototype.checkEMSO = function (emso) {
        if (!emso.value)
            return null;
        var error = {
            emsoValid: {
                valid: false
            }
        };
        var value = emso.value;
        if (!(/^\d+$/.test(value))) {
            error.emsoValid.error = 'EMSO must contain only numbers';
            return error;
        }
        else if (value.length != 13) {
            error.emsoValid.error = 'EMSO Must be a length of 13';
            return error;
        }
        var j = value.split('').map(function (number) { return parseInt(number); });
        var res = 11 - ((7 * (j[0] + j[6]) +
            6 * (j[1] + j[7]) +
            5 * (j[2] + j[8]) +
            4 * (j[3] + j[9]) +
            3 * (j[4] + j[10]) +
            2 * (j[5] + j[11])) % 11);
        if (res > 9)
            res = 0;
        var isValid = res == j[12];
        if (!isValid)
            error.emsoValid.error = 'EMSO is not valid.';
        return isValid ? null : error;
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