import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ITheme } from '../../shared/interfaces';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss'],
})
export class ThemeListComponent implements OnInit {
  themeList: ITheme[] | null = null;
  errorFetchingData: boolean = false;

  get user() {
    return this.authService.user;
  }

  constructor(
    private apiService: ApiService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.getThemes();
  }

  getThemes() {
    this.apiService.getThemes().subscribe({
      next: (val) => {
        this.themeList = val;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }

  subscribeHandler(e: MouseEvent) {
    const themeId = (
      (e.target as HTMLButtonElement).parentNode as HTMLDivElement
    ).id;

    this.apiService.subscribe(themeId).subscribe({
      next: (val) => {
        this.getThemes();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
