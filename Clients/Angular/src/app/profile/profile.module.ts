import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileService } from './profile.service';

@NgModule({
  declarations: [ProfilePageComponent],
  providers: [ProfileService],
  imports: [CommonModule],
})
export class ProfileModule {}
