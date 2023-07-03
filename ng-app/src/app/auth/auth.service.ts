import { Injectable } from '@angular/core';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: IUser | null = { username: 'Daniel', email: 'daniel@gmail.com', tel: '00359:0000000'} as any;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor() {}
}
