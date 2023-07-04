import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { emailPattern } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { IUser } from 'src/app/shared/interfaces';

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
      .subscribe({
        next: (user) => {
          this.authService.user = user as IUser;
          this.router.navigate(['/theme/list']);
        },
        error: (err) => {
          this.authService.user = null;
          console.error(err);
        },
      });
  }
}
