import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './admin.service';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, ButtonModule],
  providers: [AdminService],
})
export class AdminModule {}
