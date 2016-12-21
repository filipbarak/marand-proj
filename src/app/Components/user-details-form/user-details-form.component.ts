import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import * as moment from 'moment';


@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {
  user: FormGroup;
  validators: any = this.checkDate;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.user = this.formBuilder.group({
      fullName: ['', Validators.required],
      dateOfBirth: ['', this.validators],
      EMSO: ['', this.checkEMSO],
      KZZ: [''],
      adress: ['']

    });


  }


  checkDate(date: FormControl) {
    if (!date.value) return null;
    return moment(date.value, 'DD.MM.YYYY', true).isValid() ? null : {
      dateValid: {
        valid: false
      }

    }
  };

  onSubmit() {
    console.log(this.user.value, this.user.valid);
  }

  checkEMSO(emso: FormControl) {
    if (!emso.value) return null;
    let error: any = {
      emsoValid: {
        valid: false
      }
    };

    let value = emso.value;
    if (!(/^\d+$/.test(value))) {
      error.emsoValid.error = 'EMSO must contain only numbers';
      return error;
    } else if (value.length != 13) {
      error.emsoValid.error = 'EMSO Must be a length of 13';
      return error;
    }
    let j = value.split('').map(number => parseInt(number));
    let res = 11 - ((7 * (j[0] + j[6]) +
      6 * (j[1] + j[7]) +
      5 * (j[2] + j[8]) +
      4 * (j[3] + j[9]) +
      3 * (j[4] + j[10]) +
      2 * (j[5] + j[11])) % 11)
    if (res > 9) res = 0;
    let isValid = res == j[12];
    if(!isValid) error.emsoValid.error = 'EMSO is not valid.';
    return isValid ? null : error
  }

  // checkEMSO(emso: FormControl) {
  //   console.log(emso);
  //   let numbersCheck = (!(/^\d+$/.test(emso.value)));
  //   let lengthCheck = (emso.value.length != 13);
  //   let j = emso.value.split('').map(number => parseInt(number))
  //   let res = 11 - ((7 * (j[0] + j[6]) +
  //     6 * (j[1] + j[7]) +
  //     5 * (j[2] + j[8]) +
  //     4 * (j[3] + j[9]) +
  //     3 * (j[4] + j[10]) +
  //     2 * (j[5] + j[11])) % 11)
  //   if (res > 9) res = 0;
  //   let isValid = res == j[12]
  //   if (!numbersCheck && !lengthCheck && isValid) {
  //     return null;
  //   }
  //   else {
  //     return {
  //       emsoValid:{
  //         valid:false
  //     }
  //   };

  // return res == j[12]


}
