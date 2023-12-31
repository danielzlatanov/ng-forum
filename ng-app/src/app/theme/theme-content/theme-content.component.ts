import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  themeId = this.route.snapshot.paramMap.get('id') as string;

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
    this.getTheme();
  }

  getTheme() {
    if (this.themeId) {
      this.apiService.getThemeById(this.themeId).subscribe({
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

  commentHandler(form: NgForm) {
    if (!this.user || form.invalid) {
      return;
    }
    const { postText } = form.value;

    this.apiService.postComment(this.themeId, postText).subscribe({
      next: (comment) => {
        this.themePosts?.push(comment);
        console.log(this.themePosts);
        form.reset();
        this.getTheme();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  subscribeHandler() {
    if (!this.user) {
      return;
    }
    this.apiService.subscribe(this.themeId).subscribe({
      next: (val) => {
        this.getTheme();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  likeHandler(e: MouseEvent) {
    if (!this.user) {
      return;
    }
    const postId = (
      (e.target as HTMLButtonElement).parentNode as HTMLDivElement
    ).id;

    this.apiService.like(postId).subscribe({
      next: (val) => {
        this.getTheme();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  isOwner(postOwnerId: string): boolean {
    return this.user?._id === postOwnerId;
  }

  deleteHandler(postId: string): void {
    if (!this.user) {
      return;
    }
    this.apiService.deletePost(this.themeId, postId).subscribe({
      next: (val) => {
        this.getTheme();
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  editHandler(post: IPost, form: NgForm): void {
    if (!this.user) {
      return;
    }
    const { post: postText } = form.value;

    this.apiService.editPost(this.themeId, post._id, postText).subscribe({
      next: (val) => {
        this.getTheme();
        post.editPostMode = false;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  toggleEditMode(post: IPost) {
    post.editPostMode = !post.editPostMode;
  }
}
