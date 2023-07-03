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

  constructor(private authService: AuthService) {}

  get user() {
    const { username, email, tel: phone } = this.authService.user!;
    const [ext, tel] = phone.split(':');
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

  saveProfile(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const { username, email, ext, phone } = form.value;
    this.authService.user = {
      username,
      email,
      tel: ext + ':' + phone,
    } as any;

    this.editMode = false;
  }

  cancelHandler() {
    this.editMode = false;
  }
}
