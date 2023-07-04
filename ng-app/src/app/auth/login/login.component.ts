import { emailPattern } from './../../shared/constants';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { IUser } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  pattern = emailPattern;

  constructor(private router: Router, private authService: AuthService) {}

  loginHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const { email, password } = form.value;
    this.authService.login(email, password).subscribe({

      next: (user) => {
        this.router.navigate(['/theme/list']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
