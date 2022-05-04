import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewInfoDataDto } from '../../Dtos';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css'],
})
export class ProfilePageComponent implements OnInit {
  public isEditMode: boolean = false;
  public oldEmail: string = '';
  public email: string = '';
  public password: string = '';
  public role: string = '';
  constructor(private profileService: ProfileService, private router: Router) {}

  ngOnInit(): void {
    const info = this.profileService.getUserInfo();
    this.email = this.oldEmail = info.email;
  }

  showEditOptions() {
    this.isEditMode = true;
  }

  submitNewInfoData() {
    const newInfo: NewInfoDataDto = {
      oldEmail: this.oldEmail,
      email: this.email,
      password: this.password,
    };
    this.profileService.submitNewInfoData(newInfo);
    this.router.navigate(['/home']);
  }
}
