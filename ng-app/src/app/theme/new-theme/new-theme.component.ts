import { Router } from '@angular/router';
import { ApiService } from './../../api.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-new-theme',
  templateUrl: './new-theme.component.html',
  styleUrls: ['./new-theme.component.scss'],
})
export class NewThemeComponent {
  constructor(private apiService: ApiService, private router: Router) {}

  createTheme(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { themeName, postText } = form.value;

    this.apiService.createTheme(themeName, postText).subscribe({
      next: () => {
        this.router.navigate(['/theme/list']);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
