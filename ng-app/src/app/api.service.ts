import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getThemes() {
    return this.httpClient.get(`${apiUrl}/themes`);
  }

  getPosts(limit?: number) {
    return this.httpClient.get(
      `${apiUrl}/posts${limit ? `?limit=${limit}` : ``}`
    );
  }
}
