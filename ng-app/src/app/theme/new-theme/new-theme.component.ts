import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent {
  constructor(private router: Router, private apiService: ApiService) {}

  createTheme(e: SubmitEvent) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    console.log(formData);
  }

  cancelHandler() {
    this.router.navigate(['/']);
  }
}
