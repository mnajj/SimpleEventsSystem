import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { ProfileService } from './profile.service';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [ProfilePageComponent],
  providers: [ProfileService],
  imports: [CommonModule, FormsModule, InputTextModule],
})
export class ProfileModule {}
