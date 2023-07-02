import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router, private authService: AuthService) {}

  loginHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }

    //! mock user
    (this.authService.user as any) = {
      username: 'Daniel',
      _id: '5fa64b162183ce1728ff371dmyMockId',
    };
    this.router.navigate(['/theme/list']);
  }
}
