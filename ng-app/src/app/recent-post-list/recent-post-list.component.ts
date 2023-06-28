import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-recent-post-list',
  templateUrl: './recent-post-list.component.html',
  styleUrls: ['./recent-post-list.component.scss'],
})
export class RecentPostListComponent {
  postList: IPost[] | null = null;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (val) => {
        this.postList = val;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
