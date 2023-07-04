import { apiUrl } from './../api.service';
import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl = apiUrl;
  user: IUser | null = null;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) {}

  register(
    username: string,
    email: string,
    password: string,
    rePassword: string,
    tel?: string
  ) {
    const body = {
      username,
      email,
      password,
      rePassword,
      tel,
    };
    return this.http.post(`${apiUrl}/register`, body);
  }

  login(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this.http.post(`${apiUrl}/login`, body);
  }

  getProfile() {
    return this.http.get<IUser>(`${apiUrl}/users/profile`);
  }
}
