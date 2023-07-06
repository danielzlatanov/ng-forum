import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ITheme } from './shared/interfaces';
import { IPost } from './shared/interfaces';

export const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  //! Themes
  getThemes() {
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }

  getThemeById(id: string) {
    return this.httpClient.get<ITheme>(`${apiUrl}/themes/${id}`);
  }

  createTheme(name: string, text: string) {
    const body = { themeName: name, postText: text };
    return this.httpClient.post<ITheme>(`${apiUrl}/themes`, body);
  }

  //! Posts
  getPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
