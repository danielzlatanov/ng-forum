import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { emailPattern } from 'src/app/shared/constants';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  pattern = emailPattern;
  editMode = false;

  constructor(private authService: AuthService, private http: HttpClient) {}

  get user() {
    const { username, email, tel: phone } = this.authService.user!;
    const [ext, tel] = phone.split(' ');
    return {
      username,
      email,
      tel,
      ext,
    };
  }

  toggleEditMode(): void {
    this.editMode = !this.editMode;
  }

  saveHandler(form: NgForm){
    if (form.invalid) {
      return;
    }

    const { username, email, ext, phone } = form.value;
    const body = { username, email, tel: ext + ' ' + phone };
    this.authService.saveProfile(body)
    this.editMode = false;
  }
  
  cancelHandler(): void {
    this.editMode = false;
  }
}
