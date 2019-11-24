import { Component, OnInit } from '@angular/core';
import { InputForm } from '../models/inputForm.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  model: InputForm = {
    fullName: ' ',
    email: ' ',
    companyName: ' '
  };
  constructor() {}

  ngOnInit() {}
}
