import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emailPattern } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  pattern = emailPattern;

  constructor(private authService: AuthService, private router: Router) {}

  registerHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const {
      username,
      email,
      password,
      repass: rePassword,
      ext,
      phone,
    } = form.value;
    const tel = ext + ' ' + phone;

    this.authService
      .register(username, email, password, rePassword, tel || undefined)
      .subscribe((user) => {
        console.log(user);
        this.router.navigate(['/auth/login']);
      });
  }
}
