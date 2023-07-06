import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { AuthService } from 'src/app/auth/auth.service';
import { IPost, ITheme } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-theme-content',
  templateUrl: './theme-content.component.html',
  styleUrls: ['./theme-content.component.scss'],
})
export class ThemeContentComponent {
  theme: ITheme | null = null;
  themePosts: IPost[] | null = null;

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }

  constructor(
    private authService: AuthService,
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;

    if (id) {
      this.apiService.getThemeById(id).subscribe({
        next: (val) => {
          this.theme = val;
          this.themePosts = val.posts as any;
        },
        error: (err) => {
          console.error(err);
        },
      });
    }
  }
}
