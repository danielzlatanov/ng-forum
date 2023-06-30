import { AuthService } from './../../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  } 

  constructor(private router: Router, private authService: AuthService) {}
}
