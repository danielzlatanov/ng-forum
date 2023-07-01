import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.scss'],
})
export class ThemeContentComponent {
  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private authService: AuthService) {}
}
