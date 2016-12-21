import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';




@Component({
  selector: 'app-user-details-form',
  templateUrl: './user-details-form.component.html',
  styleUrls: ['./user-details-form.component.css']
})
export class UserDetailsFormComponent implements OnInit {
  user: FormGroup;
  date: any;

  constructor(private formBuilder: FormBuilder) {
  }
    ngOnInit()
    {
      this.user = this.formBuilder.group({
        fullName: ['', Validators.required],
        dateOfBirth: ['', Validators.required],
        EMSO: ['', Validators.required],
        KZZ: ['', Validators.required],
        adress: ['', Validators.required]

      });


    }


    checkDate()
    {
      this.date = moment(this.user.controls['dateOfBirth'].value, 'DD.MM.YYYY', true).isValid();
      return this.date;
    };

    onSubmit(){
      console.log(this.user.value, this.user.valid);
    }





}
