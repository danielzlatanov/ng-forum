import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emailPattern } from 'src/app/shared/constants';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  pattern = emailPattern;

  constructor() {}

  registerHandler(form: NgForm) {
    console.log('handling register request');
  }
}
