import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-recent-post-list',
  templateUrl: './recent-post-list.component.html',
  styleUrls: ['./recent-post-list.component.scss'],
})
export class RecentPostListComponent {
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.getPosts(5).subscribe({
      next: (val) => {
        console.log(val);
      },
      error: (err) => {
        console.error(err);
      },
    });
  }
}
