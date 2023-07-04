import { apiUrl } from './../api.service';
import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subscription, filter, tap } from 'rxjs';
import { IUser } from '../shared/interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  user$ = this.user$$
    .asObservable()
    .pipe(filter((val): val is IUser | null => val !== undefined));

  apiUrl = apiUrl;
  user: IUser | null = null;
  subscription: Subscription;

  get isLoggedIn() {
    return this.user !== null;
  }

  constructor(private http: HttpClient) {
    this.subscription = this.user$.subscribe((user) => (this.user = user));
  }

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
    return this.http
      .post(`${apiUrl}/register`, body)
      .pipe(tap((user) => this.user$$.next(user as IUser)));
  }

  login(email: string, password: string) {
    const body = {
      email,
      password,
    };
    return this.http
      .post(`${apiUrl}/login`, body)
      .pipe(tap((user) => this.user$$.next(user as IUser)));
  }

  logout() {
    return this.http
      .post(`${apiUrl}/logout`, {})
      .pipe(tap(() => this.user$$.next(null)));
  }

  getProfile() {
    return this.http
      .get<IUser>(`${apiUrl}/users/profile`)
      .pipe(tap((user) => this.user$$.next(user as IUser)));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
