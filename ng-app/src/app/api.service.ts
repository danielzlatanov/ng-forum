import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './interfaces/theme';
import { IPost } from './interfaces/post';

const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getThemes() {
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }

  getPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
