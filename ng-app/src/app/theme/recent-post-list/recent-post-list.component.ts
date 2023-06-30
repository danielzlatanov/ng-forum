import { Component } from '@angular/core';
import { ApiService } from '../../api.service';
import { IPost } from '../../shared/interfaces';

@Component({
  selector: 'app-recent-post-list',
  templateUrl: './recent-post-list.component.html',
  styleUrls: ['./recent-post-list.component.scss'],
})
export class RecentPostListComponent {
  postList: IPost[] | null = null;
  errorFetchingData: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (val) => {
        this.postList = val;
      },
      error: (err) => {
        this.errorFetchingData = true;
        console.error(err);
      },
    });
  }
}
